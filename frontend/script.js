const container = document.getElementById("songs-container");

async function fetchSongs() {
  try {
    const res = await fetch("http://localhost:3000/songs-db");
    const songs = await res.json();

    container.innerHTML = ""; // vider container

    songs.forEach(song => {
      const card = document.createElement("div");
      card.className = "song-card";

      card.innerHTML = `
  <img src="${song.image}" alt="${song.title}">
  <h3 title="${song.title}">${song.title}</h3>
  <p title="${song.artist}">${song.artist}</p>
  <audio controls src="${song.audio}"></audio>
`;
      container.appendChild(card);
    });

  } catch (err) {
    console.error(err);
    container.innerHTML = "<p>Erreur lors du chargement des musiques</p>";
  }
}

fetchSongs();