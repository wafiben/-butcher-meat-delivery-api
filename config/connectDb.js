const mongoose = require("mongoose");
const dbUrl =
  "mongodb+srv://dbUser:54900777@databasemerbappliation.pmjh4.mongodb.net/?retryWrites=true&w=majority";
const connectDb = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("db is connected");
  } catch (error) {
    console.log("connexion db is failed");
  }
};
module.exports = connectDb;
