const extend = require("../helpers/roleFunction");
const mongoose = require("mongoose");
const { userSchema } = require("./User.js");
const AdminUserSchema = extend(userSchema, {
  x: { type: String, required: true },
});
const AdminUser = mongoose.model("admin", AdminUserSchema);
module.exports = AdminUser;
