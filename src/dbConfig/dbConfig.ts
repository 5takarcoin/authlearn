import mongoose from "mongoose";

export async function connect() {
  try {
    const connectionUrl = `${process.env.MONGODB_URI!}${process.env.DB_NAME}`;
    mongoose.connect(connectionUrl);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    connection.on("error", (err) => {
      console.log("MongoBD connection error: " + err);
      // process.exit();
    });
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
}
