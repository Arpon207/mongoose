import express from "express";
import product from "../models/product.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const newProduct = new product(req.body);
  try {
    const savedHotel = await newProduct.save();
    res.status(200).send(savedHotel);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await product.find();
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await product.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const result = await product.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
