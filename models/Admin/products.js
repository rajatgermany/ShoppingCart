var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoosastic = require('mongoosastic');
var ProductSchema = Schema({

    Name : { type:String, es_indexed:true },
    Description : { type:String, es_indexed:true },
    Category :  { type:String, es_indexed:true },
    Price : String,
    Like : Number


});


ProductSchema.plugin(mongoosastic);
module.exports = mongoose.model('Shopping', ProductSchema);