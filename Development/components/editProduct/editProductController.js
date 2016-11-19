angular.module('editProduct', [])
    .controller('editProductController', function($scope,$stateParams,resourceFactory,cartFactory){

    resourceFactory.get({product_id:$stateParams.product_id}, function(value){
        $scope.product = value;

    })
    $scope.AddToCart = function(product) {
        Promise = cartFactory.addProduct(product)
        Promise.then(function (value) {
            $scope.$emit('myEvent', 'yo')  // Event is emiited each item a Product is added to the Cart
        })

    }
})
