const path = require("path");
const express = require('express');

const app = express();
app.use(express.static(path.join(__dirname, 'dist')))

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.get("/json", (req, res) => {
  res.json({ message: "Udacity Cloud DevOps Engineer Nanodegree - Capstone Project" });
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});