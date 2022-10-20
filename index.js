import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoute from "./routes/products.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("connected to backened");
  } catch (error) {
    throw error;
  }
};
run();

//middlewares
app.use(cors());
app.use(express.json());
app.use("/products", productRoute);

app.listen(port, () => {
  console.log("listening to port", port);
});
