const userController = require('../controllers/user');
//dependiencies
module.exports = (app) => {
    app.post('/create', userController.create);
    app.post('/delete', userController.delete);
    app.post('/details', userController.details);
    app.post('/update', userController.update);
}


