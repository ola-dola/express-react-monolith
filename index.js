require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/api/hello", (req, res) => {
  res.send("Hello!!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
