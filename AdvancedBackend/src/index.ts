import express from 'express'
import axios from 'axios'
import Redis from 'ioredis'

const app = express();
const PORT = process.env.PORT ?? 8000;

// interface CacheStore {
//     totalPageCount:number
// }
// const cacheStore ={ //clear , LRU .Server crash, New set of problems
//     totalPageCount:0,
// }

const redis = new Redis({host:'localhost',
    port: Number(6379)
});

//  rate limiter - middleware

app.use(async function(req,res,next) {
    const key = 'rate-limit';
    //'rate-limit${user_id}'
    const value= await redis.get(key)
    

    if(value == null){
       await redis.set(key, 1)
        await redis.expire(key, 60);
        // await redis.expire(key,60); //for clearing it after 1 min

    }
    if(Number(value) >10){
        return res.status(429).json({message:'Too many request'})
    }

   await redis.incr(key);
    next();
})


// redis.lpush('video-queue','video-url1')

// queue system 

/**
 * LPush (video-url)  Api Server :8000 <--- Video Url (video-url)
 * 
 * Redis[,video-url2,video-url1]
 * 
 * Rpull Video Processor(video-url) // 1 then 2 then 3
 * 
 * 
 * for statck 
 * Lpush , Lpop 
 */

app.get('/',(req,res) => {
    return res.json({
        success: 'success'
    });
});

app.get('/books',async(req,res) => {

    const response= await axios.get('https://api.freeapi.app/api/v1/public/books')
    return res.json(response.data)

});



app.get('/books/total',async(req,res) => {

    //check cache
    const cachedValue = await redis.get("totalPageValue");
       if(cachedValue){

        console.log("cache hit")
        return res.json({totalPageCount:Number(cachedValue) });

    }


    const response= await axios.get('https://api.freeapi.app/api/v1/public/books')

    const totalPageCount = response?.data?.data?.data?.reduce((acc:number, curr: { volumeInfo? : {pageCount? : number}})=> !curr.volumeInfo?.pageCount ? 0 : curr.volumeInfo.pageCount + acc,0);

    //set the cache
    // cacheStore.totalPageCount = Number(totalPageCount);

    await redis.set("totalPageValue",totalPageCount);

    console.log('cacheMiss')
    return res.json({totalPageCount });

})

app.listen(PORT,() => console.log(`Server is running at PORT ${PORT}`));
