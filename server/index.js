import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";

dotenv.config();

const app = express();
app.use(cors());

app.use(
  express.json({
    limit: "50mb",
  })
);

app.get("/", async (req, res) => {
  res.send("Hello world");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("Server has started on port http://localhost:8080");
    });
  } catch (error) {
    console.log("Error occured while connecting to DB and starting server");
    console.log("Error is : " + error + " Error message is " + error.message);
  }
};

startServer();
