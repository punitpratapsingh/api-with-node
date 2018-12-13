const UserModel = require('../../schemas/user');

module.exports = ({ name, phone }) => new Promise((resolve, reject) => {
    const userObject = new UserModel({
        name,
        phone,
    });

    userObject.find({name: 'punit'})
        .then(() => resolve({ code: 104, message: 'find result ' }))
        .catch(err => reject({ code: 105, message: 'User not saved given details.', error: err }));
});
