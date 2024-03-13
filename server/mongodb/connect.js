import mongoose, { mongo } from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("Database connection is successufll"))
    .catch((error) => console.log(error));
};

export default connectDB;
