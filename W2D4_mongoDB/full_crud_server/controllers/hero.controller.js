// the controller does CRUD for the DB
// import the model here
const Hero = require("../models/hero.model")
// console.log(Hero)

// READ ALL
module.exports.readAll = (req, res) => {
    Hero.find()
        .then((allDaHeroes) => {
            res.json({ Heros: allDaHeroes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

// READ ONE
module.exports.readOne = (req, res) => {
    Hero.findOne({ _id: req.params.id })
        .then(oneSingleHero => {
            res.json({ Hero: oneSingleHero })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

// CREATE
module.exports.create = (req, res) => {
    Hero.create(req.body)
        .then(newlyCreatedHero => {
            res.json({ Hero: newlyCreatedHero })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

// UPDATE
module.exports.update = (req, res) => {
    Hero.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedHero => {
            res.json({ Hero: updatedHero })
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