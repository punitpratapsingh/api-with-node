const userController = require('../controllers/user');
//dependiencies
module.exports = (app) => {
    app.post('/create', userController.create);
    app.delete('/delete', userController.delete);
    app.get('/details', userController.details);
    app.put('/update', userController.update);
}


