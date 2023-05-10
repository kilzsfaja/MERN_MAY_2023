// this is where all the routes will go

const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

module.exports = (app) => {

    // demo route
    app.get("/api/demo", (req, res) => {
        console.log("inside '/api/demo'")
        res.json({message: "cool"})
    })

    // READ ALL
    app.get("/api/users", (req, res) => {
        // ! whatever we send here is what React will receive in the .then()
        res.json(users)
    })

    // READ ONE
    app.get("/api/users/:idx/", (req, res) => {
        console.log(req.params)
        res.json(users[req.params.idx])
    })

    // CREATE
    app.post("/api/users", (request, response) => {
        console.log(request.body)
        const {firstName} = request.body
        console.log(firstName)
        // add to our fake DB
        users.push(request.body)
        response.json({allGood: true})
    })
}