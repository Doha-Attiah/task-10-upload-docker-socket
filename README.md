# Uploads, Docker & Socket.IO Chat

A simple Express.js application built to practice **File Uploads**, **Docker**, and **Socket.IO** concepts.

This project was implemented as part of the Node.js Bootcamp and focuses on three main topics:

- File Uploads (Local Storage & Cloudinary)
- Docker & Docker Compose
- Real-Time Communication using Socket.IO

---

# Features

## File Upload

- Upload images to local storage using Multer.
- Upload images to Cloudinary.
- Image validation (JPEG, PNG, WEBP).
- Maximum upload size: 5MB.
- Static file serving using Express.

---

## Docker

- Dockerfile for the Node.js application.
- docker-compose.yml with:
  - API Service
  - MongoDB Service
- Named volume for MongoDB persistence.
- Ready to run using Docker Compose.

---

## Socket.IO Chat

Implemented real-time communication with:

- connection
- disconnect
- chat:join
- chat:message
- chat:typing

Messages are broadcast in real time between connected clients.

---

# Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- Cloudinary
- multer-storage-cloudinary
- Socket.IO
- Docker
- Docker Compose
- Morgan
- Dotenv
- CORS

---

# Project Structure

```text
task-10-upload-docker-socket
│
├── app.js
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .env.example
├── README.md
├── public/
│   └── socket-test.html
├── ├── uploads/ (created automatically after local upload)
└── src/
    ├── controllers/
    │   └── upload.controller.js
    ├── middlewares/
    │   └── upload.middleware.js
    ├── routes/
    │   └── upload.routes.js
    └── socket/
        └── chat.socket.js
```

---

# Environment Variables

Create a `.env` file:

```env
PORT=

MONGODB_URI=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=
```

---

# Installation

Install dependencies

```bash
npm install
```

Run application

```bash
npm run watch
```

Server

```
http://localhost:3000
```

---

# Docker

The project includes Docker configuration.

Files included:

- Dockerfile
- docker-compose.yml
- .dockerignore

Start services

```bash
docker compose up --build
```

Services:

- API
- MongoDB

MongoDB data is stored using a named volume.

---

# API Endpoints

## Local Upload

```http
POST /api/v1/upload/local
```

Uploads one image to the local `uploads` folder.

Returns:

- filename
- originalname
- size
- path
- public URL

---

## Cloud Upload

```http
POST /api/v1/upload/cloud
```

Uploads one image to Cloudinary.

Returns:

- filename
- originalname
- size
- Cloudinary URL

---

# Socket.IO Events

## Built-in Events

### connection

Triggered when a client connects.

---

### disconnect

Triggered when a client disconnects.

---

## Custom Events

### chat:join

Client joins the chat.

Broadcasts:

```
user-joined
```

---

### chat:message

Broadcasts chat messages to all connected clients.

---

### chat:typing

Broadcasts typing indicator to other connected clients.

---

# Testing

## Local Upload

POST

```
/api/v1/upload/local
```

Body:

form-data

```
file → File
```

---

## Cloud Upload

POST

```
/api/v1/upload/cloud
```

Body:

form-data

```
file → File
```

---

## Socket.IO

Open

```
http://localhost:3000/socket-test.html
```

Open two browser tabs.

Test:

- Join
- Message
- Typing

Verify real-time communication.

---

# Validation

Image types:

- JPEG
- PNG
- WEBP

Maximum file size:

```
5MB
```

---