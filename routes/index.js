var express = require('express');
var router = express.Router();

var admin = require('./admin.js');
var user = require('./user.js');
var UserManagement = require('./UserManagement.js');
var CartManagement = require('./CartManagement.js')
var OrderManagement = require('./OrderManagement.js')





router.get('/api/admin', admin.AllProducts);
router.get('/api/admin/:product_id', admin.Singleproduct)
router.post('/api/admin', admin.AddProduct);
router.put('/api/admin/:product_id', admin.UpdateProduct)
router.delete('/api/admin/:product_id', admin.DeleteProduct);

//User

router.post('/api/user/Register', user.RegisterUser);
router.post('/api/user/Login', user.LoginUser);

// UserManagement

router.get('/api/user/products', UserManagement.AllProducts);
router.get('/api/user/products/:product_id', UserManagement.SingleProduct );
router.put('/api/user/AddLike/:product_id',UserManagement.AddLike);

router.get('/api/user/GetUser', UserManagement.GetUser)
router.get('/api/user/Cart', UserManagement.GetCart)

//CartManagement

router.get('/api/cart/Cart/:cart_id', CartManagement.GetCart);
router.post('/api/cart/Cart', CartManagement.AddToCart);
router.put('/api/cart/Cart/:cart_id', CartManagement.EditCart);

//orderManagement

router.post('/api/order/ShippingDetails', OrderManagement.AddShippingDetails);




module.exports = router;
