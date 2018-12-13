const UserModel = require('../../schemas/user');

module.exports = ({ name, phone }) => new Promise((resolve, reject) => {
    const userObject = new UserModel({
        name,
        phone,
    });

    userObject.save()
        .then(() => resolve({ code: 100, message: 'User saved.' }))
        .catch(err => reject({ code: 101, message: 'User not saved.', error: err }));
});
