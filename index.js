const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db.js');

dotenv.config({ path: './config/config.env' });

connectDB();

const transactions = require('./routes/transactions');

const app = express();

// to parse the data sent from the client in req.body
app.use(express.json());

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;
app.listen(
	PORT,
	console.log(`listening on port ${PORT} in ${process.env.NODE_ENV}`.white)
);
