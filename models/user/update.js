const UserModel = require('../../schemas/user');

module.exports = ({userId ,name}) => new Promise((resolve, reject) => {
    
    UserModel.update({userId,name})
        .then(() => resolve({ code: 106, message: 'updated  ' }))
        .catch(err => reject({ code: 107, message: 'not updated', error: err }));
});