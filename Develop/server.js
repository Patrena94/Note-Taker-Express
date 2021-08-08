//Dependencies that are required.
// const fs = require('fs');
// const path = require('path')
const express = require('express');
// const { Router } = require('express');

// const {notes} = require('./data/db.json');
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
// const { networkInterfaces } = require('os');
// const { query } = require('express');
// const { title } = require('process');

const app = express();
const PORT = process.env.PORT ||3001;

// // Middleware parse incoming string or array data and incoming json
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

//Required for Routes-Transport
require("./routes/htmlroutes")(app);
require("./routes/apiRoutes")(app);

// Initate Server
app.listen(PORT, () => {
    console.log("App is now listening on PORT:" + PORT);
});
