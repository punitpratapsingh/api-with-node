const UserModel = require('../../schemas/user');

module.exports = ({ name, phone }) => new Promise((resolve, reject) => {
    const userObject = new UserModel({
        name,
        phone,
    });

    userObject.update({name: 'punitsingh'})
        .then(() => resolve({ code: 106, message: 'find result ' }))
        .catch(err => reject({ code: 107, message: 'User not saved.', error: err }));
});