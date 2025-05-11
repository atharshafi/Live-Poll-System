

### ✅ `README.md`

```markdown
# 🗳️ Team Polls - Real-time Polling App

A real-time team polling app built with:

- **Backend**: Node.js, Express, PostgreSQL, Redis, WebSocket, JWT
- **Frontend**: Vite + React
- **Dockerized**: Runs both frontend and backend in containers

---

## 📁 Project Structure

```

team-polls/
├── backend/       # Node.js + Express backend
├── frontend/      # Vite + React frontend
├── docker-compose.yml
└── README.md

````

---

## 🚀 Getting Started (with Docker)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/team-polls.git
cd team-polls
````

---

### 2. Environment Variables

#### ➤ Backend (`backend/.env`)

```env
PORT=3000
JWT_SECRET=supersecret
DATABASE_URL=postgresql://user:password@postgres:5432/polls
REDIS_URL=redis://redis:6379
```

#### ➤ Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:3000
```

---

### 3. Run with Docker

```bash
docker-compose up --build
```

This will:

* Start the backend on `http://localhost:3000`
* Start the frontend on `http://localhost:5173`
* Start PostgreSQL on port `5432`
* Start Redis on port `6379`

---

## 🛠️ Development Tips

### Backend Scripts

```bash
# Inside backend/
npm install
npm run dev
```

### Frontend Scripts

```bash
# Inside frontend/
npm install
npm run dev
```

---

## 📄 API Endpoints (Examples)

* `POST /auth/anon` – Create anonymous user
* `POST /poll` – Create poll
* `POST /vote` – Vote on a poll
* `GET /poll/:id` – Get poll by ID
* `GET /polls` – Get all polls

---

## 📦 Database Migration

To apply schema changes:

```bash
cat backend/src/db/migrate.sql | docker exec -i team-polls-backend-postgres-1 psql -U user -d polls
```

---

## 📊 Frontend Pages

* `CreatePoll`: Create a new question with options
* `VotePoll`: View polls and vote
* `PollResults`: See vote count per option

---

## 🧹 TODO

* Add admin dashboard (optional)
* Add user login (optional)
* Add charts for results visualization

---

## 📜 License

MIT

```

---

Let me know if you'd like the `docker-compose.yml` section included in the README or want a version that supports deployment (like Docker Swarm or Heroku setup).
```
