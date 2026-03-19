const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  image: String,
  audio: String
});

module.exports = mongoose.model("Song", songSchema);