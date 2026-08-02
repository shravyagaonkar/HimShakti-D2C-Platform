# React + Vite

This project is a full-stack web application built using React, Vite, Express.js, MongoDB Atlas, and Tailwind CSS. It includes user authentication, CRUD operations, and an AI-powered product description generator.

## Features

- User Registration & Login
- JWT Authentication
- Product CRUD Operations
- AI Product Description Generator
- Responsive UI
- MongoDB Atlas Database

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Hugging Face Inference API

---

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Install dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
HF_API_KEY=your_huggingface_api_key
PORT=5000
```

---

## Running the Project

### Start Backend

```bash
npm start
```

### Start Frontend

```bash
npm run dev
```

---

## Database Choice

MongoDB Atlas was chosen because it is a NoSQL document database that integrates well with JavaScript applications. Mongoose simplifies schema creation, validation, and CRUD operations.

---

## MongoDB Schema Diagram

![MongoDB Schema](./Schema-Diagram.png)

---

# Deployment

## Live Frontend URL

https://your-frontend.vercel.app

## Live Backend URL

https://your-backend.vercel.app

---

## Tech Stack Summary

- React + Vite
- Tailwind CSS
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Hugging Face Inference API

---

## Known Limitations (Free Tier)

- Vercel serverless functions may experience a short cold start after periods of inactivity.
- The free plan has execution time and resource limits.
- External APIs (such as Hugging Face) may respond more slowly depending on network conditions and usage limits.

---

## Deployment Status

The application has been successfully deployed on Vercel.

- Frontend deployed on Vercel
- Backend deployed on Vercel
- MongoDB Atlas used as the cloud database
- AI feature connected to Hugging Face API