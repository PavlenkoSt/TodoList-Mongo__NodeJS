const config = require("dotenv").config().parsed;
const mongoose = require("mongoose");

const { DB_HOST, DB_PORT, DB_TABLE } = config;

const authentificate = async () => {
  try {
    await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_TABLE}`);
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

authentificate();

const TodoSchema = new mongoose.Schema({
  userName: String,
  task: String,
  isDone: Boolean,
});

module.exports = {
  Todo: mongoose.model("Todo", TodoSchema),
};
