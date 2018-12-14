const UserModel = require('../../schemas/user');

module.exports = ({ userId }) => new Promise((resolve, reject) => {

    UserModel.remove({_id: userId })
        .then(() => resolve({ code: 102, message: 'User deleted.' }))
        .catch(err => reject({ code: 103, message: 'User not deleted', error: err }));
});
