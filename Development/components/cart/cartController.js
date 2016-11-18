/**
 * Controller Function
 * Cart functions are defined in the CartFactory
 */

angular.module('cart', [])
     .controller('cartController', function($scope,cartFactory, userFactory,$window,$state,$q,$alert){

         var promise =  cartFactory.ItemCount(); // Gets the ItemCount
    promise.then(function(){
        return  cartFactory.getCart()
    }).then(function(resolve){
        $scope.cart = resolve   // $scope.cart has the CartData for the LoginUser

    })
    $scope.Remove = function(product) {
        var promise =cartFactory.RemoveProduct(product);
        promise.then(function(resolve){
            if(resolve == 'cancelled'){ // if No is Pressed on RemoveProduct alert Box
                //Do nothing
            }
            else {
                // if Yes is Pressed on RemoveProduct alert Box
                $scope.cart = resolve  // Updated Cart Value after removal is in $scope.cart
                $alert({
                    title: 'Cart Updated',
                    animation: 'am-fade-and-slide-top',
                    placement: 'top',
                    type: 'info',
                    keyboard: false,
                    container: 'body',
                    show: true
                });
            }}).then(function(){
            $scope.$emit('myEvent', 'yo') // After Removal event is emiited
        })
    }
         $scope.Home = function(){
        $state.go('home')
    }
})
