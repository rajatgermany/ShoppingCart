var Register = require('../models/users.js');
var  express = require('express');
var jwt    = require('jsonwebtoken');

var app = express();
app.secret = 'ilovescotchyscotch' ;
app.set('SuperSecret', app.secret);

var authentication = {

    RegisterUser : function (req,res) {
        var rajat = new Register({
            Name : req.body.data.Name,
            Email : req.body.data.Email,
            Password : req.body.data.Password,
            Phone : 1234,
            Token:null,
            cart : null,
            ShippingAddress: {Entry : 'Empty' }

        });

        rajat.save(function(err,docs){
            if(err) res.send(err)
            res.json(docs);
        });
    },

    LoginUser:  function(req,res) {
        Register.findOne({Email: req.body.LoginData.Email}, function (err, user) {
            if (!user) {
                res.json({success: false, message: 'Authentication failed ! No username Exists'})

            } else if (user) {
                if (user.Password != req.body.LoginData.Password) {
                    res.json({success: false, message: 'Authentication failed ! Password Mismatch'})

                } else {
                    var token = jwt.sign(user, app.get('SuperSecret'))
                    user.Token = token;
                    user.save(function (err, user) {
                        console.log('Token Saved')
                    });

                    res.json({
                        success: true,
                        message: 'Enjoy your token!',
                        token: token
                    });

                }

            }

        });
    }
}

module.exports = authentication;