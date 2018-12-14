const UserModel = require('../../schemas/user');

module.exports = ({Id}) => new Promise((resolve, reject) => {
    
    UserModel.update({Id})
        .then(() => resolve({ code: 106, message: 'updated  ' }))
        .catch(err => reject({ code: 107, message: 'not updated', error: err }));
});