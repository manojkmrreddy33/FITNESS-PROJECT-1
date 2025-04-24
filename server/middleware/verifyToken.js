import jwt from "jsonwebtoken";
import { createError } from "../error.js";

export const verifyToken = async (req, res, next) => {
  try {

    const token = req.cookies.access_token;
    console.log(req.cookies.access_token,"token",token)
    if (!token) return next(createError(401, "You are not authenticated"));
      const decode = jwt.verify(token, process.env.JWT);
      req.user = decode;
      return next();
    } catch (err) {
    console.log(err)
    next(err);
  }
};

export default verifyToken;
