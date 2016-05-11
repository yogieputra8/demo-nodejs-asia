var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/kampus');


var userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    admin: Boolean,
    address: String 
});



var User = mongoose.model('User', userSchema);

module.exports = User;







