
var Register = require('../models/users.js');
var OrderManagement = {
    AddShippingDetails : function(req,res){
        Register.findOne({Token:req.headers.authorization}, function(err,docs){
            docs.ShippingAddress = {Name: req.body.data.Name, Address :req.body.data.Address}
            docs.save(function(){
                res.json({message : 'DetailsSaved'})
               })

           })
    }

}

module.exports = OrderManagement;