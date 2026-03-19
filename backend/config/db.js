const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Utiliser la variable d'environnement MONGO_URI si elle existe
    const uri = process.env.MONGO_URI || "mongodb://localhost:27017/musicdb";
    await mongoose.connect(uri);
    console.log("MongoDB connecté");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;