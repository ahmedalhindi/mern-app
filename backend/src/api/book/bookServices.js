const { Book } = require("./model")

exports.create = ({ title }) => {
  let book = new Book({
    title,
  })
  return book.save()
}

exports.getAll = () => {
  return Book.find({})
}
