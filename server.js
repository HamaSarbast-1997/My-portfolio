require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const contactRoute = require('./routes/contactRoute');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/' ,contactRoute);


const PORT = process.env.PORT || 5000;

app.listen(PORT , console.log(`Server listing to port ${PORT}`));