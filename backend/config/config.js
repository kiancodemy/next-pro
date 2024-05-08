import { connect } from "../connect/connect.js";
import { a } from "../a.js";

import Order from "../models/ordermodel.js";
import User from "../models/usermodel.js";

import Product from "../models/productmodel.js";
import users from "../users.js";

connect();

const deleter = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    console.log("deleted");
  } catch (err) {
    console.log(err.message);
  }
};

const adder = async () => {
  await Order.deleteMany();
  await User.deleteMany();
  await Product.deleteMany();

  const getusers = await User.insertMany(users);
  const admin = getusers[0]._id;
  const all = a.map((item) => {
    return { user: admin, ...item };
  });

  await Product.create(all);
  console.log("data is created");
};
if (process.argv[2] === "--delete") {
  deleter();
} else if (process.argv[2] === "--add") {
  adder();
}
