const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const routes = require("./router");

const {
  PORT,
  MONGO_URL,
  ROUTERS: { API },
} = require("./config");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(API, routes);

const start = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
    });

    app.listen(PORT, () => {
      console.log(`Server listen on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
