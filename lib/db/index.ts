import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URL || "";

if (!MONGO_URI) {
  throw new Error(
    "Please define the MONGO_URL environment variable inside .env.local"
  );
}

/**
 * Global esta siendo usado para mantener una referencia a la conexion
 * en desarrollo. Esto permite que la conexion sea reutilizada en el
 *  servidor caliente.
 */

let globalAny: any = global;

let cached = globalAny.mongoose;

if (!cached) {
  cached = globalAny.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
