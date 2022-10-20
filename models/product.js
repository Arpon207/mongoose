import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  sold: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("products", productSchema);
