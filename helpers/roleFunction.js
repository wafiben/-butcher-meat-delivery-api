const mongoose = require("mongoose");
const extend = (Schema, obj) =>
  new mongoose.Schema(Object.assign({}, Schema.obj, obj));
module.exports = extend;
