const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
// Enable CORS for all routes
app.use(cors());
// Body parser middleware
app.use(express.json());

// API Routes
app.use('/api/notes', require('./routes/api/notes'));

// Simple root route for health check
app.get('/', (req, res) => {
  res.send('MERN Notes API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
