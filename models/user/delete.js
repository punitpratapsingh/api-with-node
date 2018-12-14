const UserModel = require('../../schemas/user');

module.exports = ({ name, phone }) => new Promise((resolve, reject) => {


    UserModel.deleteOne({name:'punit'})
        .then(() => resolve({ code: 102, message: 'User deleted.' }))
        .catch(err => reject({ code: 103, message: 'User not deleted', error: err }));
});




