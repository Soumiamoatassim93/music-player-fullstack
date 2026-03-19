// backend/init.js
const mongoose = require("mongoose");
const axios = require("axios");
const Song = require("./models/song.model");

async function initializeDatabase() {
  try {
    console.log("🔄 Initialisation de la base de données...");
    
    // Vérifier si la DB est déjà remplie
    const count = await Song.countDocuments();
    if (count > 0) {
      console.log(`✅ Base déjà initialisée avec ${count} chansons`);
      return;
    }

    // Appeler l'API Deezer
    console.log("📡 Récupération des données depuis Deezer...");
    const response = await axios.get("https://api.deezer.com/chart");
    
    const songs = response.data.tracks.data.slice(0, 10);
    const formattedSongs = songs.map(song => ({
      title: song.title,
      artist: song.artist.name,
      image: song.album.cover_medium,
      audio: song.preview
    }));

    // Sauvegarder dans MongoDB
    await Song.insertMany(formattedSongs);
    console.log(`✅ ${formattedSongs.length} chansons sauvegardées dans MongoDB`);

  } catch (error) {
    console.error("❌ Erreur d'initialisation:", error.message);
  } finally {
    mongoose.disconnect();
  }
}

// Connexion à MongoDB
mongoose.connect("mongodb://mongodb:27017/musicdb")
  .then(() => {
    console.log("📦 Connecté à MongoDB");
    initializeDatabase();
  })
  .catch(err => {
    console.error("❌ Erreur de connexion MongoDB:", err);
  });