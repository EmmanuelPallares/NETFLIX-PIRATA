const express = require("express");
const app = express();
const moongose = require("mongoose");
const dotoenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const testerRoute = require("./routes/test");

dotoenv.config();
moongose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api", testerRoute);

app.listen(8800, () => {
  console.log("server is running on port 8800");
});
