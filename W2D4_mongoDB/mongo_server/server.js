const express = require("express");
const mongoose = require('mongoose');
const app = express();

// must have this at the top to access the .env file
require('dotenv').config();

// extract info from the .env file
const PORT = process.env.PORT
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@cluster0.iydy8ad.mongodb.net/${dbName}?retryWrites=true&w=majority`;
// mongodb+srv://bob:<password>@cluster0.iydy8ad.mongodb.net/

// middleware
app.use(express.json(), express.urlencoded({extended:true}));

// CONNECT TO THE DB
mongoose.connect(uri)
    .then(() => console.log(`🦄🦄🦄🦄 Established a connection to the ${dbName} database`))
    .catch(err => console.log("❌❌❌❌ Something went wrong when connecting to the database", err));


app.listen(PORT, () => console.log(`🎈🎈🎈 server up on port ${PORT}`))