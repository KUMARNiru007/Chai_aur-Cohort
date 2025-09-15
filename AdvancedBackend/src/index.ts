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
