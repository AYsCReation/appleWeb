const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    username: String,
    password: String,
    cpassword : String,
    email : String,
    number : Number,
    session : {
        type : Boolean,
        default : false
    }

})


const Account = new mongoose.model('Account', accountSchema);
module.exports = Account;