const UserModel = require('../../schemas/user');

module.exports = ({userId }) => new Promise((resolve, reject) => {
    

    UserModel.find({_id: userId})
        .then(() => resolve({ code: 104, message: 'updated data ' +name }))
        .catch(err => reject({ code: 105, message: 'User not fined on given details.', error: err }));
});
