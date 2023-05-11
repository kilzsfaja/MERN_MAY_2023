const HeroController = require('../controllers/hero.controller');
console.log("HeroController is =>", HeroController)

module.exports = app => {
    app.get('/api/heroes', HeroController.readAll);
    app.get('/api/heroes/:id', HeroController.readOne);
    app.post('/api/heroes', HeroController.create);
    app.patch('/api/heroes/:id', HeroController.update);
    app.delete('/api/heroes/:id', HeroController.delete);

}