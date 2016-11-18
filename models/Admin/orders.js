var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Cart = require('../cart.js')


var OrderSchema = Schema({

    Cart:{ type: Schema.Types.ObjectId, ref: 'Cart' },
    User: String,
    Reciepient: String,
    Address :String



});

module.exports = mongoose.model('Orders', OrderSchema);