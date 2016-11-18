
angular.module('MovieApp')
    .controller('mainAppController', function($scope,searchFactory,$state,$location){
        $scope.show = false;
        $scope.product = null;
        $scope.search = function(){  // Product Search Using Elastic Search
            var promise = searchFactory.search($scope.product)
        promise.then(function(result){
            $location.search({id:$scope.product})
            $state.go('SearchProduct')
            $location.search({id:$scope.product})
            $scope.item = result;

        })
    }









})

