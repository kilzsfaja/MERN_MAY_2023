const express = require('express');
const cors = require('cors')
// console.log(app)
const app = express();


// middleware
app.use(cors())
// app.use(cors({
//     origin: "*",
//     methods: ["GET", "POST"]
// }))
app.use(express.json(), express.urlencoded({ extended: true }));

// load .env vars
require('dotenv').config()
// access the .env vars
const port = process.env.PORT

// Require / import the file
// this file doesn't need to export anything
require("./config/mongoose.config")

// require the routes here to run
// const AllMyHeroRoutes = require("./routes/hero.routes");
// AllMyHeroRoutes(app);
require("./routes/hero.routes")(app)


app.listen(port, () => console.log(`Listening on port ${port} for REQuests to RESpond to.`));

