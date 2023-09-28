//old method

// import mongoose, { connect, connection } from "mongoose";

// const conn = {
//   isConnected: false,
// };

// export async function connectDB() {
//   if (conn.isConnected) return;
//   const database = await connect("mongodb://localhost:27017/LOM_PROJ");
//   const db_store = database.connection.db.databaseName;
//   console.log(db_store);

//   conn.isConnected = mongoose.connections[0].readyState;
//   console.log(conn.isConnected);
// }

// connection.on("connected", () => {
//   console.log("mongoose connected");
// });

// connection.on("error", (err) => {
//   console.log("mongoose not connected", err);
// });

// new method

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/LOM_PROJ");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
