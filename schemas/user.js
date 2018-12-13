//dependencies
var restful = require('node-restful');
var mongoose=restful.mongoose;

//schema
var userSchema = new mongoose.Schema({
    name: String,
    phone: String,
});

//return model
module.exports = restful.model('User',userSchema);