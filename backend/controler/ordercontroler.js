import Order from "../models/ordermodel.js";

//add order//
export const addOrders = async (req, res) => {
  try {
    const {
      orderItems,
      shippingAddress,
      shippingPrice,
      totalPrice,
      itemPrice,
      taxPrice,
    } = req.body;
    if (orderItems && orderItems.length !== 0) {
      const make = await Order.create({
        orderItems: orderItems.map((item) => ({
          ...item,
          product: item._id,
          _id: undefined,
        })),
        user: req.user._id,
        shippingAddress,
        shippingPrice,
        totalPrice,
        itemPrice,
        taxPrice,
      });
      res.status(201).json({ data: make });
    } else {
      throw new Error("آیتمی ارسال نشده");
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
//my ordres
export const myOrders = async (req, res) => {
  try {
    const get = await Order.find({ user: req.user._id });
    res.status(200).json(get);
  } catch (err) {
    res.status(404).json({ meesage: err.message });
  }
};

//getorder by id//
export const getOrdersbyid = async (req, res) => {
  try {
    const find = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );
    res.status(201).json(find);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
//pay
export const paid = async (req, res) => {
  try {
    const find = await Order.findById(req.params.id);
    const settter = (find.isPaid = true);
    const updated = await find.save();
    res.status(201).json(updated);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
///deliver
export const deliver = async (req, res) => {
  try {
    const find = await Order.findById(req.params.id);
    const settter = (find.isDelivered = true);
    const updated = await find.save();
    res.status(201).json(updated);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//all orders by admin
export const allorders = async (req, res) => {
  try {
    const find = await Order.find({});

    res.status(201).json(find);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const MyorderById = async (req, res) => {
  try {
    const find = await Order.findById(req.params.id);
    res.status(200).json(find);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
