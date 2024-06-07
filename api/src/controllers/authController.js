import User from "../models/user.js";
import bcrypt from "bcrypt";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export const register = async (req, res) => {
  const { fullname, username, password, confirmPassword, gender } = req.body;
  try {
    const existUser = await User.findOne({ username });
    if (existUser)
      return res.status(409).json("User with same username already exists");

    if (password !== confirmPassword) {
      return res.status(400).json("Passwords didn't match");
    }

    // hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // Avatar placeholder Free image API
    const boyProfilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullname,
      username,
      password: hash,
      gender,
      profilePic: gender === "male" ? boyProfilepic : girlProfilepic,
    });

    if (newUser) {
      // Generate JWT token here
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      return res.status(201).json({
        _id: newUser.id,
        fullname: newUser.fullname,
        username: newUser.username,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(400).json("Invalid user data");
    }
  } catch (error) {
    console.log("error is register controller", error.message);
    return res.status(500).json("Internal server error");
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existUser = await User.findOne({ username });
    if (!existUser) return res.status(404).json("User didnt exist");

    const isPasswordMatch = bcrypt.compareSync(password, existUser.password);
    if (!isPasswordMatch)
      return res.status(400).json("Invalid username or password"); // we dont say that password is incorrect - it could be security risk

    generateTokenAndSetCookie(existUser._id, res);

    return res.status(200).json({
      _id: existUser.id,
      fullname: existUser.fullname,
      username: existUser.username,
      gender: existUser.gender,
      profilePic: existUser.profilePic,
    });
  } catch (error) {
    console.log("error is login controller", error.message);
    return res.status(500).json("Internal server error");
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("authToken", {
      sameSite: "none",
      secure: true,
    });
    res.status(200).json("Logged out successfully");
  } catch (error) {
    console.log("error is logout controller", error.message);
    return res.status(500).json("Internal server error");
  }
};
