/**
 * Created by Mani on 13-10-2016.
 */
var Product = require('../models/Admin/products.js')
var Register = require('../models/users.js')
var Cart = require('../models/cart.js')


var CartManagement = {

    AddToCart: function (req, res) {
        var Product = new Cart({
            Product : req.body[0] ,
            Customer : req.headers.authorization

        });

        Product.save(function(err,docs){
            Register.findOne({Token :req.headers.authorization}, function(err,docs){
                if(err) res.send(err)
                docs.cart = Product._id
                docs.save(function(err,docs){
                    res.json(Product);
                })
            })
        })
    },

    GetCart : function(req,res){
        Cart.findOne({_id:String(req.params.cart_id)}, function(err,docs){
            res.json(docs);
        })
    },


    EditCart : function(req,res){
        Cart.findOne({_id:req.body.cart_id}, function(err,docs){
            docs.Product = req.body.Cart ;
            docs.save(function(err,updateddoc){
                res.json(updateddoc)
            })
        })
    }

}

module.exports = CartManagement;