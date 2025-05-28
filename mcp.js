const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/", async (req, res) => {
  const response = await fetch("https://www.boredapi.com/api/activity");
  const data = await response.json();
  res.send(data.activity);
});

app.listen(3000, () => console.log("Bot hazır http://localhost:3000"));
