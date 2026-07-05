# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Database Choice

I chose MongoDB Atlas because it is a NoSQL document database that works well with JavaScript applications. Using Mongoose made it easy to define schemas and perform CRUD operations.

## Database Setup

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the backend folder

```bash
cd backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Add the following variables:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 5. Start the backend

```bash
npm start
```

### 6. Start the frontend

```bash
npm run dev
```

---
