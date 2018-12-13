const CreateUser = require('../models/user/create');
const DeleteUser = require('../models/user/delete');
const DetailsUser = require('../models/user/details');
const UpdateUser = require('../models/user/update');


const CommonHandler = (req, res, CallingFunction) => {
    CallingFunction(req.body)
        .then(success => res.send(success))
        .catch(err => res.send(err));
}

module.exports = {
    create: (req, res) => CommonHandler(req, res, CreateUser),
    delete: (req,res) => CommonHandler(req,res, DeleteUser),
    details: (req,res) => CommonHandler(req,res, DetailsUser),
    update: (req,res) => CommonHandler(req,res, UpdateUser)
};



