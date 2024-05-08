import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.ObjectId, require: true, ref: "User" },
    name: { type: String, require: true },
    rating: { type: Number, require: true },
    comment: { type: String, require: true },
  },
  { timestamps: true }
);

const productschema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.ObjectId, require: true, ref: "User" },
    name: { type: String, require: true },
    image: { type: String, require: true },
    brand: { type: String, require: true },
    category: { type: String, require: true },
    description: [String],
    reviews: [reviewSchema],
    rating: { type: Number, require: true, default: 0 },
    numReviews: {
      type: Number,
      require: true,
      default: 0,
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    color: [{ color: String, code: String }],
    countInStock: {
      type: Number,
      require: true,
      default: 0,
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", productschema);
export default Product;
