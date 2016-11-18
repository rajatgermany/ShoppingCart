var Product = require('../models/Admin/products.js')
var Register = require('../models/users.js')
var Cart = require('../models/cart.js')


var UserManagement = {

    AllProducts: function (req, res) {
        Product.find({}, function (err, docs) {
            res.json(docs)
        })
    },

    SingleProduct : function(req,res){
        Product.findOne({_id:req.params.product_id}, function(err,docs){
            res.json(docs)
        })
    },


    AddLike: function (req, res) {
        Product.findOne({_id: req.params.product_id}, function (err, product) {
            if (err) res.send(err)
            product.Like = product.Like + 1;
            product.save(function (err, docs) {
                Register.findOne({Token: req.header.authorization}, function (err, user) {
                    user.Products.push(product._id)
                    user.save(function (err, updateddocs) {
                        console.log(updateddocs)
                    })
                })
            })
        })

    },


    GetUser : function(req,res){
        Register.find({Token: req.headers.authorization}, function (err, docs) {
                res.json(docs)
            })
        },

    GetCart : function(req,res){
        Cart.find({Customer:req.headers.authorization}, function(err,docs){
            res.json(docs);
        })
    }
}


module.exports = UserManagement;