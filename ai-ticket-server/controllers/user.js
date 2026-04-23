import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { inngest } from "../inngest/client.js";

export const signup = async (req, res) => {

  try {
    const { email, password, skills = [] } = req.body;

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashed, skills });

    // firing an inngest event when a user signs up
    await inngest.send({
      name: "user/signup",
      data: {
        email, // email is the only data we want to send to the event
      },
    });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.json({ user, token})
  } catch (error) {
    res.status(500).json({ error: "Signup Failed", details: error.message });
  }
};

export const login = async (req, res) => {

  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({ message : "User not found" });

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) return res.status(400).json({message: "Invalid Credentials"})

    const token = jwt.sign(
      {_id: user._id, role: user.role},
      process.env.JWT_SECRET
    )

    res.json({ user, token})


  } catch (error) {
    res.status(500).json({ error: "Login Failed", details: error.message });
  }
};
