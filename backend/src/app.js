const express = require("express")
const cors = require('cors')
const app = express()

const bookRoutes = require('./api/book/routes')



app.get("/ping", (req, res) => {
  res.send("pong")
})
app.use(cors());
app.use(express.json());
app.use("/api/books", bookRoutes);

module.exports = app
