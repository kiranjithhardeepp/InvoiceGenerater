const User = require("../Models/User");
const bcrypt = require("bcrypt");
const generateToken = require("../lib/util");

const signUp = async (req, res) => {
  const { userName, email, password } = req.body;
  console.log("password: ", password);
  console.log("email: ", email);
  console.log("userName: ", userName);
  if (!userName || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
  try {
    const userAlReadyExist = await User.findOne({ email });
    if (userAlReadyExist) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      const generatedToken = generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        success: true,
        message: "User created successfully",
        _id: newUser._id,
        userName: newUser.userName,
        email: newUser.email,
        token: generatedToken,
      });
    }
  } catch (error) {
    console.log("error in signup contoller", error);
    res.status(500).json({ message: "error in signUp" });
  }
};
const signIn = async (req, res) => {
  const { email, password } = req.body;
  console.log('password: ', password);
  console.log('email: ', email);
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }
    generateToken(user._id, res);
    user.isVerified = true;
    await user.save();
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: user,
    });
  } catch (error) {
    console.log("error in login", error);
    res.status(500).json({ message: "error in signIn" });
  }
};

const logOut = async (req,res) => {
  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development", // Only secure in production
  });
  res.status(200).json({ status: true, message: "logout succesful" });
};

module.exports = { signUp, signIn, logOut };
