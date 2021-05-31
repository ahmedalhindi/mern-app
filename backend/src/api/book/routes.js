const router = require("express").Router()
const Book = require("./bookServices")

router.post("/", async (req, res) => {
  const book = await Book.create(req.body)

  res.status(200).send(book)
})

router.get("/", async (req, res) => {
  const books = await Book.getAll()

  res.status(200).send(books)
})

module.exports = router
