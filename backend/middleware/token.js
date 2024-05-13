import jwt from "jsonwebtoken";
export const generator = async (id) => {
  const maker = await jwt.sign({ userid: id }, process.env.SECRETJWT, {
    expiresIn: "1d",
  });
  return maker;
};
