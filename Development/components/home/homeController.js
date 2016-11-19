/**
 * Home Controller defines the home View
 */
angular.module('homeApp', [])
    .controller('homeController', function($rootScope, $scope,resourceFactory,homeFactory, ActiveProduct,cartFactory,userFactory) {
        var SelectedCategory = null;
        $scope.cart = [];
        $scope.size = 3;  //Number of Items in the Page
        $scope.newpage = 1  // Defines the Page Number. Default is 1
        /**
         * Lists all the Product
         */

        function GetProducts() {
            $scope.products = resourceFactory.query(function (result, responseHeaders) {
                console.log(result);
                userFactory
                    .query()
                    .$promise
                    .then(function (result) {
                        $scope.User = result[0].Name
                    });

            }, function (responseHeaders) {
                alert('Api Access Forbidden')

            });

        }
        GetProducts();

        /**
         *
         * @param product_id
         * Add Likes to the Product
         */
    $scope.Like = function(product_id){
        $scope.like = true;
        homeFactory.update({id:product_id , like: $scope.like}, function(res){   //Like Value Updated
            GetProducts()
        }, function(httpResponse){
            console.log(httpResponse)
        });

    };
        /**
         * User Selected Category
         */
    $scope.selectCategory = function(Category){
        $scope.newpage = 1;
        SelectedCategory = Category;
        $scope.CategoryFilter = Category;

    }
        /**
         * User Selected Page
         */

    $scope.SelectedPage = function(Page){
        $scope.newpage = Page;

    }

    
    $scope.getClass = function(Category){   //Css class of the SeletedCategory
        if(SelectedCategory == Category){
            return ActiveProduct;
        }
        else {
            return null;
        }
    }
        /**
         *
         * @param Page
         * Css class of the Selected Page
         */

    $scope.getPageClass = function(Page){
        if($scope.newpage == Page){
            return ActiveProduct;
        }
        else {
            return null;
        }
    }
        /**
         *
         * @param product
         * Adds Product with Qunatity to the Cart
         */
        $scope.AddToCart = function(product){
         Promise = cartFactory.addProduct(product)
        Promise.then(function(value){
            $scope.$emit('myEvent', 'yo')

        })
    }

});