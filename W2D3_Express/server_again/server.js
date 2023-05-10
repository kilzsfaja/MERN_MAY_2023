const express = require("express");
const app = express();
const PORT = 8000;

// --- MIDDLEWARE ---
app.use(express.json(), express.urlencoded({ extended: true }));
// ------------------

// ! all routes in a server must start with /api

const routesFile = require("./routes/routes")
routesFile(app)

// const callbackFunction = (req, res) => {
//     console.log("inside '/api/demo'")
//     res.json({message: "cool"})
// }

// app.get("/api/demo", callbackFunction)


app.listen(PORT, () => console.log("server up on PORT:", PORT))