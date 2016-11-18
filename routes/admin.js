var Product = require('../models/Admin/products.js')
var Orders = require('../models/Admin/orders.js')

var admin = {

    AllProducts : function (req,res) {
        Product.find({}, function(err,docs){
            res.json(docs)
        })
    },

    Singleproduct :  function(req,res){
        Product.find({_id:req.params.product_id}, function(err,docs){
            res.json(docs)
        })
    },
    
    DeleteProduct : function(req,res){
        Product.remove({_id:req.params.product_id}, function(err,docs){
            if (err) res.send(err)
            res.json({Product: 'Deleted'})
        });
},

    AddProduct : function(req,res){
        var rajat =  new Product ({
            Name : 'Rajatnew1',
            Category : 'Lull1',
            Price : '205',
            Description : 'hiii',
            Like : 0
        })
        rajat.save();
        var rajat =  new Product ({
            Name : 'Rajatnew2',
            Category : 'Lull2',
            Price : '205',
            Description : 'hiii',
            Like : 0
        })

        rajat.save();

        var rajat =  new Product ({
            Name : 'Rajatnew3',
            Category : 'Lull3',
            Price : '205',
            Description : 'hiii',
            Like : 0
        })
        rajat.save();

        var rajat =  new Product ({
            Name : 'Rajatnew4',
            Category : 'Lull2',
            Price : '205',
            Description : 'hiii',
            Like : 0
        })
        rajat.save();

        var rajat =  new Product ({
            Name : 'Rajatnew5',
            Category : 'Lull2',
            Price : '205',
            Description : 'hiii',
            Like : 0
        })
        rajat.save();
        var rajat =  new Product ({

            Name : 'Rajatnew6',
            Category : 'Lull2',
            Price : '205',
            Description : 'hiii',
            Like : 0
        })

        rajat.save();

        var rajat =  new Product ({

            Name : 'Rajatnew7',
            Category : 'Lull3',
            Price : '205',
            Description : 'hiii',
            Like : 0
        })



        rajat.save();

        var rajat =  new Product ({

            Name : 'Rajatnew8',
            Category : 'Lull3',
            Price : '205',
            Description : 'hiii',
            Like : 0
        })

        rajat.save();
        var rajat =  new Product ({
            Name : 'Rajatnew9',
            Category : 'Lull3',
            Price : '205',
            Description : 'hiii',
            Like : 0
        })
        rajat.save();
        res.json('Updated')

    }, 

    
    UpdateProduct : function(req,res){

        Product.findOne({_id:req.params.product_id}, function(err,product){

            if (err) res.send(err)
            product.Name = 'RajatUpdated'
            product.save(function(err,docs){
                res.json(docs);
            })
            })
        }

    }



module.exports = admin;