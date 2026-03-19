const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const songRoutes = require("./routes/song.routes");

const app = express();

app.use(cors());
app.use(express.json());

// Connexion DB
connectDB();

// Routes
app.use("/", songRoutes);

app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});