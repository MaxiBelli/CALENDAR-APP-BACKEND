const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');


// Create the express server
const app = express();

//Database
dbConnection();

// Configuring CORS
app.use(cors());

// Public directory
app.use(express.static('public'));

// Read and parse the body
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// Listen to requests
app.listen(process.env.PORT, () => {
console.log(`Server running on port ${process.env.PORT}`);
});