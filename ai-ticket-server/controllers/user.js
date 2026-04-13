import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { inngest } from "../inngest/client.js";

export const signup = async (req, res) => {
  const { email, password, skills = [] } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashed, skills });

    // firing an inngest event when a user signs up
    await inngest.send({
      name: "user/signup",
      data: {
        email, // email is the only data we want to send to the event
      },
    });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(201).json({
        token,
        user: { id: user._id, email: user.email, skills: user.skills },
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

