const express = require("express");
const app = express();
const userRoutes=require("./routes/user");
const cors=require("cors");
app.use(express.json()); // used to parse json request body

app.use(cors())
app.use("/auth",userRoutes);




module.exports = app;
