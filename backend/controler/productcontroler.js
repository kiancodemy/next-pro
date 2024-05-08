import Product from "../models/productmodel.js";
export const getall = async (req, res) => {
  try {
    let query = Product.find({ price: { $gte: "68000000" } });

    query = await query;

    res.status(200).json(query);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
export const getById = async (req, res) => {
  try {
    let query = await Product.findById(req.params.id);
    res.status(200).json(query);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
