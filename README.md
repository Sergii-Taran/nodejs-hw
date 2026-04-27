# Node.js Notes API

A simple Express-based API for managing notes.
This project demonstrates basic server setup, routing, middleware, and error handling.

## 🚀 Live Demo

Base URL:
https://nodejs-hw-1gxk.onrender.com/

## 📦 Tech Stack

- Node.js
- Express
- CORS
- Pino HTTP (logging)
- dotenv

## ⚙️ Features

- Environment variables support
- REST API routing
- JSON request handling
- HTTP request logging
- 404 handler (unknown routes)
- Global error handler

## 📌 API Endpoints

### 🔹 Get all notes

GET /notes

Response:
{
"message": "Retrieved all notes"
}

---

### 🔹 Get note by ID

GET /notes/:noteId

Example:
GET /notes/123

Response:
{
"message": "Retrieved note with ID: 123"
}

---

### 🔹 Test error route

GET /test-error

Response:
{
"message": "Simulated server error"
}

---

### 🔹 Unknown routes

Any non-existing route:

Response:
{
"message": "Route not found"
}

## 🛠️ Getting Started

### 1. Clone repository

git clone https://github.com/Sergii-Taran/nodejs-hw.git

### 2. Install dependencies

npm install

### 3. Create .env file

PORT=3000

### 4. Run project

Development mode:
npm run dev

Production mode:
npm start

## 📁 Project Structure

src/
server.js

## ✍️ Author

Sergii Taran
