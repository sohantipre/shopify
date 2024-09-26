import User from "../models/usermodel.js";
import asynchandler from "express-async-handler";
import generateauth from "../utils/generateauth.js";

const authuser = asynchandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchpassword(password))) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      token: generateauth(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email oe password");
  }
});

const authuserprofile = asynchandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404).send();
    throw new Error("User not found");
  }
});

const createuser = asynchandler(async (req, res) => {
  const { email, password, name } = req.body;

  const user = await User.create({ email, password, name });
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    res.send("invalid credentials");
  }
});

const updateuserprofile = asynchandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updateduser = await user.save();
    res.json({
      id: updateduser._id,
      name: updateduser.name,
      email: updateduser.email,

      isAdmin: updateduser.isAdmin,
      token: generateauth(user._id),
    });
  } else {
    res.status(404).send();
    throw new Error("User not found");
  }
});

const getusers = asynchandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

const deleteuser = asynchandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "User removed" });
  } else {
    throw new Error("User not found");
  }
});

const updateuserbyid = asynchandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin || user.isAdmin;
    const updateduser = await user.save();
    res.json({
      id: updateduser._id,
      name: updateduser.name,
      email: updateduser.email,

      isAdmin: updateduser.isAdmin,
    });
  } else {
    res.status(404).send();
    throw new Error("User not found");
  }
});

const getuserbyid = asynchandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.json(user);
  } else {
    throw new Error("User not found");
  }
});

export {
  authuser,
  authuserprofile,
  createuser,
  updateuserprofile,
  getusers,
  deleteuser,
  getuserbyid,
  updateuserbyid,
};
