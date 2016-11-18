angular.module('viewProduct', [])
    .controller('viewProductController', function($scope,$stateParams,resourceFactory,cartFactory) {
        resourceFactory.get({product_id: $stateParams.product_id}, function (value) {
        console.log(value);
        $scope.product = value;

    })
        // Adding Producr
    $scope.AddToCart = function(product) {
        Promise = cartFactory.addProduct(product)
        Promise.then(function (value) {
            $scope.$emit('myEvent', 'yo')
        })
    }
});

