const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const customerRoute = require("./routes/customer");
const cors = require("cors");


 
connection.end();

const app = express();
app.use(cors());
// ======================== connect to db
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ========================= handle the connection events
const db = mongoose.connection;
db.on("error", (error) => {
  console.error("Failed to connect to MongoDB", error);
});
db.once("open", () => {
  console.log("Successfully connected to MongoDB");
});
// ========================= handle the routes
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/customer", customerRoute);

// listen
app.listen(process.env.PORT, () => {
  console.log("server is running on port ", process.env.PORT);
});
