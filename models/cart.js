var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CartSchema = Schema({

    Product : [],
    Customer: String

    


});

module.exports = mongoose.model('Cart', CartSchema);
