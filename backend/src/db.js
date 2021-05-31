const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL || "mongodb://localhost/mern";

const connect = async (callBack) => {
  await mongoose.connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },callBack);
};

const close = () => mongoose.connection.close();

module.exports = { connect, close, url: dbUrl };
