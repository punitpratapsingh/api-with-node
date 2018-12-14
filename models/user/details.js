const UserModel = require('../../schemas/user');

module.exports = ({Id }) => new Promise((resolve, reject) => {
    

    UserModel.findById({Id})
        .then(() => resolve({ code: 104, message: 'find result ' }))
        .catch(err => reject({ code: 105, message: 'User not fined on given details.', error: err }));
});
