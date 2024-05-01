const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

// ===== models ===========
const db = require("./models");
// ======== controllers ==========
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const customerRoute = require("./routes/customer");

app.use(cors());
app.use(bodyParser.json());

app.get("/api/", (req, res) => {
  res.json("hello to the back end server of avtax");
});
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/customer", customerRoute);

// listen
const PORT = process.env.PORT || 3000; //
db.sequelize.sync().then((req) => {
  app.listen(PORT, () => {
    console.log("server is running on port ", PORT);
  });
});
