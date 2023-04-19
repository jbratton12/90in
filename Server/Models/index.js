"use strict";

const mongoose = require("mongoose");

// Connection URL
const url = "mongodb://127.0.0.1:27017/ninetyin";

async function setUp() {
  try {
    await mongoose.connect(url);
    console.log("Connected successfully to mongoose baby!!");
  } catch (e) {
    console.error(e);
  }
}

setUp();

module.exports = mongoose;
