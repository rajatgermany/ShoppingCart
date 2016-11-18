var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Cart = require('./cart.js')

var RegisterSchema = Schema({

    Name : String,
    Email: String,
    Password :  String,
    Phone : String,

    Token : String,
    cart : { type: Schema.Types.ObjectId, ref: 'Cart' },
    ShippingAddress: {}


});

module.exports = mongoose.model('Register', RegisterSchema);