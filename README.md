🎵 Top 10 Musiques - Dockerized Full Stack Project

🔹 Overview
Top 10 Musiques is a fully containerized full-stack application that displays a list of the top 10 songs, each with its cover image, artist name, and an integrated audio player.
The entire stack runs inside Docker containers, orchestrated with Docker Compose, making it easy to deploy and run without any local dependencies.

🚀 Key Features
🎵 Display the top 10 songs with image, title, artist, and audio player

🗄️ Persistent song data stored in MongoDB

⚙️ REST API built with Node.js and Express

🌐 Dynamic frontend using HTML, CSS, and JavaScript

🐳 Fully containerized with Docker Compose

✨ Responsive design with text truncation and hover effect for long titles/artists

🏗 Architecture
text
[ Frontend (HTML/CSS/JS) ]
        ↓
[ Backend API (Node.js/Express) ]
        ↓
[ MongoDB Database ]
The frontend fetches data from the backend API.

The backend serves song data stored in MongoDB.

All services communicate via a shared Docker network.

💻 Tech Stack
Layer	Technologies
Backend	Node.js, Express, Mongoose
Database	MongoDB
Frontend	HTML5, CSS3, JavaScript (ES6+)
DevOps	Docker, Docker Compose
Data Source	JSON / API Top 10 musiques
📂 Project Structure
text
songs/
├── backend/
│   ├── models/
│   │   └── Song.js
│   ├── routes/
│   │   └── songs.js
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── Dockerfile
├── docker-compose.yml
└── README.md
⚡ How to Run
1. Clone the repository
bash
git clone <REPO_URL>
cd songs
2. Build and start the containers
bash
docker-compose up --build
This command will:

Build the backend and frontend images

Pull the official MongoDB image

Start all three services (backend, frontend, database)

3. Verify running containers
bash
docker-compose ps
You should see three services: backend, frontend, and mongodb, all with status Up.

🌐 Application Access
Service	URL
Backend API	http://localhost:3000/songs-db
Frontend UI	http://localhost:8080/
🔍 How It Works
Backend (Node.js/Express) connects to MongoDB using Mongoose.

Songs data is stored in MongoDB and exposed via a REST API endpoint /songs-db.

Frontend fetches the song list using the fetch() API.

Each song is displayed as a card containing:

Cover image

Song title (truncated with ..., full text on hover)

Artist name (truncated with ..., full text on hover)

Built-in audio player

The UI is fully responsive and adapts to different screen sizes.

🛠 Technical Highlights
Multi-container orchestration with Docker Compose

Isolated services (frontend, backend, database) communicating via a Docker network

Environment variables for MongoDB connection (configurable via docker-compose.yml)

Volume mounting for live code updates (optional, depends on Dockerfile setup)

Custom styling with CSS Grid/Flexbox

Audio player embedded for each song

Hover effect to reveal full titles/artists

🎯 Project Value
This project demonstrates:

✅ Docker Compose for full-stack application orchestration

✅ MongoDB integration with Node.js using Mongoose

✅ REST API design and consumption

✅ Dynamic frontend behavior with vanilla JavaScript

✅ Clean separation of concerns between frontend, backend, and database

✅ Production-ready containerization best practices

✅ Professional README documentation

📸 Screenshots (optional)
You can add screenshots of your running application here to showcase the UI.

📝 License
This project is licensed under the MIT License.

👨‍💻 Author
Developed as a Dockerized Full Stack Project to showcase modern web development and containerization skills.

Let me know if you'd like to add environment variables, sample data seeding, or a troubleshooting section!

