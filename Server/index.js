const express = require("express");
const router = require("./router");
const cors = require("cors");
const bodyParser = require("body-parser");
// const { Mongo } = require("mongodb");

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`SERVER WORKING: app listening on http://localhost:${PORT} 🚀`);
});
