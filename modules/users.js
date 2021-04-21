const {Schema,model} = require('mongoose');

let userScheme = new Schema({
    userLogin: String,
    userPassword : String,
    classLet : String
}) 

module.exports = model('Users', userScheme)