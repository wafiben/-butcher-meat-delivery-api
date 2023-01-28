const { User } = require("../models/User");
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const userInfo = req.body;
  try {
    const user = await User.findOne({ email: userInfo.email });
    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "you must register before" }] });
    } else {
      const result = await bcrypt.compare(userInfo.password, user.password);
      if (!result) {
        res.status(401).json({ errors: [{ msg: "wrong password" }] });
      } else {
        const token = await jwt.sign({ id: user._id }, "shhhhh");
        res.status(200).json({ user, token });
      }
    }
  } catch (error) {
    res.status(500).json({ errors: [{ msg: "server failed" }] });
  }
};
const signUp = async (req, res) => {
  const userInfo = req.body;
  try {
    const searchedUser = await User.findOne({ email: userInfo.email });
    if (searchedUser) {
      res.status(401).json({ errors: [{ msg: "user already exist" }] });
    }
    if (!searchedUser) {
      const hashedPaswword = await bcrypt.hash(userInfo.password, 10);
      const user = new User({
        name: userInfo.userName,
        phone: userInfo.email,
        email: userInfo.email,
        password: hashedPaswword,
        company: userInfo.company,
        domain: userInfo.domain,
        code: userInfo.domain,
        adress: userInfo.domain,
      });
      await user.save();
      const token = jwt.sign({ id: user._id }, "shhhhh");
      res.status(200).json({ user, token });
    }
  } catch (error) {
    res.status(500).json({ errors: [{ msg: "server failed exist" }] });
  }
};
const createAdmin = () => {
  const x = new Admin({ name: "admin", phone: "55", x: "dd" });
  x.save();
};
const createUser = async () => {
  const a = new User({
    name: "aaa",
    phone: "54900777",
  });
  a.save();
};
module.exports = { login, signUp, createAdmin, createUser };
