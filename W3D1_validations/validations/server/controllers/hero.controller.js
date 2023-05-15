// the controller does CRUD for the DB
// import the model here
const Hero = require("../models/hero.model")
// console.log(Hero)

// READ ALL
module.exports.readAll = (req, res) => {
    Hero.find()
        .then((allDaHeroes) => {
            // console.log(">>>> readAll >> allDaHeroes =>", allDaHeroes)
            // ! this is what React will receive in the .then()
            res.json(allDaHeroes)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

// READ ONE
module.exports.readOne = (req, res) => {
    Hero.findOne({ _id: req.params.id })
        .then(oneSingleHero => {
            res.json(oneSingleHero)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

// CREATE
module.exports.create = (req, res) => {
    Hero.create(req.body)
        .then(newlyCreatedHero => {
            res.status(200).json(newlyCreatedHero)
        })
        .catch((err) => {
            console.log(">>> SERVER ERROR <<<", err)
            // ! from now on we will respond to the client with status codes
            res.status(400).json(err)
        });
}

// UPDATE
module.exports.update = (req, res) => {
    Hero.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedHero => {
            res.json(updatedHero)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

// DELETE
module.exports.delete = (req, res) => {
    Hero.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}