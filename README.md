# MERN Notes Application

This is a full-stack MERN (MongoDB, Express, React, Node.js) notes-taking application.

## Project Structure

- `/` (root): Contains the React frontend application.
- `/backend`: Contains the Node.js/Express/MongoDB backend server.

## Frontend

The frontend is a standard React application built with TypeScript and styled with Tailwind CSS. To run it, open `index.html`.

## Backend Setup

To get the backend server running, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A [MongoDB](https://www.mongodb.com/) database connection string (you can use a local instance or a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).

### 1. Navigate to Backend Directory

Open your terminal and change into the `backend` directory:
```bash
cd backend
```

### 2. Install Dependencies

Install the required npm packages for the server:
```bash
npm install
```

### 3. Create Environment File

Create a file named `.env` in the `backend` directory. This file will store your database connection string and other environment variables.

### 4. Configure Environment Variables

Add your MongoDB connection string and a port number to the `.env` file. Replace `your_mongodb_connection_string_here` with your actual connection string.

```env
# .env file

# MongoDB Connection String
MONGO_URI=your_mongodb_connection_string_here

# Server Port
PORT=5000
```

### 5. Run the Server

Start the backend server using nodemon, which will automatically restart the server on file changes.

```bash
npm run server
```

The API server will now be running at `http://localhost:5000`. The frontend is pre-configured to communicate with this address.
