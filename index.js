//IMPORTS
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

//Middlewares
app.use(cors());

//Routes
app.use('/api', require('./routes/router'));

//Listen port
app.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT}`);
});

//Exports
module.exports = app;