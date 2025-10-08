# SkillSwap — Full Stack Application

> SkillSwap is a **peer-to-peer skill exchange platform** where users can teach and learn skills, schedule sessions, chat in real-time, and optionally do video calls.
> Built with **TypeScript, Node.js, MongoDB, Socket.IO, WebRTC** for the backend and **React/Next.js + Chakra UI** for the frontend.

---

## Features

- User authentication & JWT security
- User profiles with skills to teach & learn
- Skill-based search & filtering
- Learning cart to select preferred teachers
- Connection requests and session scheduling
- Real-time messaging via Socket.IO
- Optional peer-to-peer video calls (WebRTC)
- Session feedback and ratings
- Admin moderation

---

## Tech Stack

**Backend:**

- Node.js, TypeScript, Express
- MongoDB & Mongoose
- Socket.IO (messaging & video signaling)
- WebRTC (peer-to-peer video calls)
- JWT & bcrypt for authentication

**Frontend:**

- React / Next.js
- TypeScript
- Chakra UI / Tailwind CSS (UI components & responsive design)
- Socket.IO client for real-time messaging
- WebRTC integration for video calls

---

## Project Structure

```
skillswap/
│
├─ backend/                # Node.js + TypeScript backend
│   ├─ src/
│   │   ├─ config/         # DB & environment setup
│   │   ├─ controllers/    # Route handlers
│   │   ├─ middleware/     # Auth & error handling
│   │   ├─ models/         # MongoDB schemas
│   │   ├─ routes/         # API routes
│   │   ├─ utils/          # Utility functions
│   │   └─ server.ts       # Entry point
│   ├─ .env
│   ├─ tsconfig.json
│   └─ package.json
│
├─ frontend/               # React / Next.js frontend
│   ├─ public/
│   ├─ src/
│   │   ├─ components/     # UI components
│   │   ├─ pages/          # Pages & routing
│   │   ├─ hooks/          # Custom hooks
│   │   ├─ context/        # Global state / auth context
│   │   ├─ services/       # API calls
│   │   └─ styles/         # CSS / Chakra / Tailwind
│   ├─ .env.local
│   ├─ tsconfig.json
│   └─ package.json
│
└─ README.md
```

---

## Getting Started

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

**.env example**

```
MONGO_URI=mongodb://localhost:27017/skillswap
JWT_SECRET=your_jwt_secret
PORT=5000
```

**Server runs at:** `http://localhost:5000`

---

### Frontend Setup

```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```

**.env.local example**

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
```

**Frontend runs at:** `http://localhost:3000`

---

## API Endpoints

**Auth**

- `POST /api/auth/register` → Register
- `POST /api/auth/login` → Login

**Users**

- `GET /api/users` → Search/filter users
- `GET /api/users/:id` → Profile details
- `PUT /api/users/:id` → Update profile
- `POST /api/users/:id/cart` → Add to learning cart
- `DELETE /api/users/:id/cart` → Remove from cart

**Connections / Sessions / Feedback**

- `POST /api/connections` → Send request
- `PUT /api/connections/:id` → Accept/Reject
- `GET /api/connections` → List connections
- `POST /api/sessions` → Schedule session
- `GET /api/sessions` → List sessions
- `POST /api/feedback` → Submit feedback

---

## Socket.IO & Video Calling

**Socket events:**

- `join_room` → Join session room
- `send_message` → Real-time chat
- `webrtc_offer` → WebRTC offer
- `webrtc_answer` → WebRTC answer
- `ice_candidate` → Exchange ICE candidates for video call

**Video Flow:**

1. User schedules a session → session room created
2. Both users join room
3. WebRTC peer-to-peer connection via Socket.IO signaling
4. Direct video/audio stream between browsers

---

## Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/YourFeature`
3. Commit: `git commit -m "Add feature"`
4. Push: `git push origin feature/YourFeature`
5. Open a Pull Request

---

## License

MIT License © [Ashutosh Neupane]
