/**
 * CartFactory
 * Creates a Object Having functions as ItemCount, AddProduct, GetCart as properties
 *
 */

angular.module('cart')
    .service('cartFactory',['CartResourceFactory','userFactory','$q', function(CartResourceFactory,userFactory,$q) {

    var cartFactory = {}
    cartFactory.CartData = [];
    cartFactory.count = 0;
    cartFactory.CartID = null;

        // Returns the promise object with reolve value as Number of items in the Cart
    cartFactory.ItemCount= function() {
        var deferredObject = $q.defer();
        userFactory
            .query()
            .$promise
            .then(function(result){
                if(result[0].cart == null){  // First Product in the Cart
                    cartUser = result[0].Token
                    deferredObject.resolve(cartFactory.count)
                }
                else {
                    CartResourceFactory
                        .get({cart_id:result[0].cart})
                        .$promise
                        .then(function(result){
                            cartFactory.CartData = result.Product;
                            cartFactory.CartID = result._id;
                            cartFactory.count = 0;
                            for (var i = 0; i < result.Product.length; i++) {
                                cartFactory.count =  parseInt(cartFactory.count)+ parseInt(result.Product[i].Quantity);
                            }
                            deferredObject.resolve(cartFactory.count)
                        })
                }
            });

        return deferredObject.promise;
    };

    cartFactory.addProduct = function (product) {
        var deferredObject = $q.defer();
        var productAlreadyAddedToCart = false;

        if (cartFactory.CartID == null && cartFactory.CartData.length == 0) {  // Product Added First time
                cartFactory.CartData.push({
                    id: product._id,
                    Quantity: product.Quantity,
                    Name: product.Name,
                    Category: product.Category,
                    Price: product.Price
                });
                var AddToCart = new CartResourceFactory();
                AddToCart.data = cartFactory.CartData;
                CartResourceFactory.save(AddToCart.data, function (value) {
                    deferredObject.resolve(cartFactory.count)
                });

                productAlreadyAddedToCart = true;
            }
            else {

            /* Checks for Already added product in Cart. IF new product is
             present in the cart then its qunatity is increased
             */
            for (var i = 0; i < cartFactory.CartData.length; i++) {
                    if (cartFactory.CartData[i].id == product._id) {

                        cartFactory.CartData[i].Quantity = parseInt(cartFactory.CartData[i].Quantity) + parseInt(product.Quantity);
                        CartResourceFactory.update({Cart: cartFactory.CartData, cart_id: cartFactory.CartID}, function(value){
                            deferredObject.resolve(cartFactory.count)
                        });
                        productAlreadyAddedToCart = true;
                        break; // Product Found in the Cart
                    }
                }
            }
            if (productAlreadyAddedToCart == false ) {
                cartFactory.CartData.push({
                    // product is added to the Array
                    id: product._id,
                    Quantity: product.Quantity,
                    Name: product.Name,
                    Category: product.Category,
                    Price: product.Price
                });

                CartResourceFactory.update({Cart: cartFactory.CartData, cart_id:cartFactory.CartID}, function(){
                    deferredObject.resolve(cartFactory.count)
                });
            }
        return deferredObject.promise;
    };

    cartFactory.getCart = function () {
        var deferredObject = $q.defer();
        CartResourceFactory
            .get({cart_id :cartFactory.CartID})
            .$promise
            .then(function(result){
                deferredObject.resolve(result.Product)
    })
        return deferredObject.promise;
    }

        /**
         *
         * @returns {NUMBER} NUMBER is the total value of the items in the cart
         * @constructor
         */
    cartFactory.Total = function () {
        var Total = 0;
        for (var i = 0; i < cartFactory.CartData.length; i++) {
            Total = Total + cartFactory.CartData[i].Price * parseInt(cartFactory.CartData[i].Quantity)
        }
        return Total;   //Total Price of all the items  in the Cart
    }

        /**
         *
         * @param product
         * Removes product from the Cart
         */
        cartFactory.RemoveProduct = function (product) {

        var deferredObject = $q.defer();
        if (confirm("Are You Sure") == true) {
            x = "You pressed OK!";

            var index = 0;
            for (var i = 0; i < cartFactory.CartData.length; i++) {    // Gets the Index of the product in the Array to be removed
                if (cartFactory.CartData[i].id == product.id) {
                    index = i;
                    break;
                }
            }

            cartFactory.CartData.splice(index, 1);
            CartResourceFactory
                .update({Cart: cartFactory.CartData, cart_id: cartFactory.CartID})  //Cart is Updated after the Removal of the Product
                .$promise
                .then(function (result) {
                    deferredObject.resolve(cartFactory.CartData)
                })
        }
        else {
            deferredObject.resolve('cancelled')
        }
        return deferredObject.promise;
    }
    return cartFactory;


}])


