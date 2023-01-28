const express = require("express");
const app = express();
const AuthRouter = require("./routes/authRoute");
const connectDb = require("./config/connectDb");
const PORT = 5000;
app.listen(PORT, (e) => {
  if (!e) {
    console.log(`server is running on port ${PORT}`);
  } else {
    console.log("server is failed");
  }
});
connectDb();
app.use(express.json());
app.use("/api", AuthRouter);
