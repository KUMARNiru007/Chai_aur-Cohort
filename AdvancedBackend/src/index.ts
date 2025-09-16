import express from 'express'
import axios from 'axios'
import Redis from 'ioredis'
import http from 'http'
import { Server } from "socket.io";

const app = express(); //express server

const state = new Array(100).fill(false);

const httpServer = http.createServer(app); //Http Server to monyt kar diya Server

const io = new Server(); // Socket Server

io.attach(httpServer)

// socket and exopress bith running on same port

io.on('connection',(socket) => {
    console.log(`Socket connected`, socket.id);

    socket.on('message' , (msg) =>{
        io.emit('server-message' ,msg) //Broadcast to all the connect clients
    } );


    socket.on('checkbox-update',(data) =>{
        state[data.index] = data.value;  //sate maintainees
        io.emit('checkbox-update' ,data);
    });
});




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



// middleware for sockets 
app.use(express.static('./public'))


//  rate limiter - middleware

app.use(async function(req,res,next) {
    const key = 'rate-limit';
    //'rate-limit${user_id}'
    const value= await redis.get(key)
    redis.set(key, 0);

    if(value === null){

        await redis.setex(key, 60, 1);
       return next();
    //    await redis.set(key, 0);
    //    await redis.expire(key,60);
        // Set to 1 with 60 second expiry
        // await redis.expire(key,60); //for clearing it after 1 min

    }
    if(Number(value) >=100){
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

 app.get('/state',(req,res) => {
        return res.json({state})
    } )

// app.listen(PORT,() => console.log(`Server is running at PORT ${PORT}`));

httpServer.listen(PORT , () => console.log(`HTTP Server is Running on PORT ${PORT}`));

