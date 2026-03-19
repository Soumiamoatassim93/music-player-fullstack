const express = require("express");
const axios = require("axios");
const Song = require("../models/song.model");

const router = express.Router();

// 🔹 GET API + stocker
router.get("/songs", async (req, res) => {
  try {
    const response = await axios.get("https://api.deezer.com/chart");

    const songs = response.data.tracks.data.slice(0, 10);

    const formattedSongs = songs.map(song => ({
      title: song.title,
      artist: song.artist.name,
      image: song.album.cover_medium,
      audio: song.preview
    }));

    await Song.deleteMany();
    await Song.insertMany(formattedSongs);

    res.json(formattedSongs);
  } catch (error) {
    res.status(500).json({ error: "Erreur API" });
  }
});

// 🔹 GET depuis MongoDB
router.get("/songs-db", async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: "Erreur DB" });
  }
});

module.exports = router;