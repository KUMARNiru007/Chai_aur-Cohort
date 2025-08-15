import mongoose from 'mongoose'

if(!process.env.MOGODB_URI){
    throw new Error("Please define the Mongodn String")
}


/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose  // like golbal pointy o window object

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase(){
    if(cached.conn){
        return cached.conn
    }

    if(!cached.promise){
        const opts = {
            bufferCommands :false
        } // connected handled

      cached.promise =   mongoose.connect(process.env.MONGODB_URI, opts)
        .then((mongoose) =>{
            return mongoose
        })

    } // connecting handleed


    //one more disconnecting --
    // we need to handle all 3 test cases
 try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
export default connectToDatabase; 