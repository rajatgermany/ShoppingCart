angular.module('placeOrder', [])
    .controller('placeOrderController.js',function($scope,cartFactory,userFactory,placeOrderFactory,$state, $modal){
        var modal = $modal({scope: $scope, templateUrl: '/components/placeOrder/editShippingModal.html', show: false});
        $scope.$on('$stateChangeSuccess', function (event,nextUrl) {
// Presents view according to the next Url
        if(nextUrl.name == 'ShippingDetails'){
            userFactory.query(function(value){
                if(value[0].ShippingAddress.Entry){
                    $scope.Form =  true
                    $scope.Data = false;
                    $scope.newForm = false;
                }
                else {
                    $scope.Form =  false
                    $scope.Data = false;
                    $scope.newForm = true;
                    $scope.ShippingDetails = value[0].ShippingAddress
                }
            })
        }

        else if(nextUrl.name == 'PlaceOrder')   // If user already entered his Shipping Details
        {
            userFactory.query(function(value){
                if(value[0].ShippingAddress.Entry){
                    $scope.Form =  true
                    $scope.Data = false;
                    $scope.newForm = false;
                }

                else {
                    $scope.Form =  false
                    $scope.Data = true;
                    $scope.newForm = false;
                    $scope.Name = value[0].ShippingAddress.Name
                    $scope.Address = value[0].ShippingAddress.Address;
                }

            })

        }
    });

// Add Shipping Details

$scope.addDetails = function(Details){
    $scope.order = new placeOrderFactory ;
    $scope.order.data = Details;
    $scope.order.CartID = cartFactory.CartID;
    placeOrderFactory.save($scope.order, function(value){
        modal.$promise.then(modal.show);
    })
}

    $scope.EditShipping = function(){
        $state.go('ShippingDetails')
    }
        $scope.GoHome = function(){
            modal.$promise.then(modal.hide);
            $state.go('ViewCart')
        }
})




