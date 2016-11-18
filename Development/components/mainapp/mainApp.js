/**
App Dependencies
 */
var app = angular.module('MovieApp', ['ui.router','ngResource','shared', 'homeApp','placeOrder','editProduct',
    'resourceFactory', 'AuthenticationApp','ngStorage', 'angular.filter', 'cart','placeOrder', 'navBar',
    'elasticsearch', 'viewProduct','mgcrea.ngStrap.modal', 'mgcrea.ngStrap.aside', 'mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.alert','ngAnimate']
);

app.config(["$modalProvider", function($modalProvider) {
    angular.extend($modalProvider.defaults, {
        animation: 'am-flip-x'
    });
}])

app.constant("ActiveProduct", "btn-primary");


/**
 * Checks the next state ! if User is not Autheniticated the navigation to views is prevented
 */
app.run(['GetTokenFactory','$localStorage', '$rootScope', '$state' ,'$alert', function(GetTokenFactory,$localStorage,$rootScope,$state, $alert){

    $rootScope.preventNavigation = false;
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
 if(toState.authenticate == false){
     return ;
 }
 else if (!GetTokenFactory.GetToken($localStorage.newToken) ||$rootScope.preventNavigation && !confirm("You have unsaved changes, do you want to continue?")){
     event.preventDefault();
     $alert({title: 'Login First!', content: '', placement: 'top', type: 'info', show: true});
 };
    });
}]);


// Aangular ui-configuration

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/user/login');
    $stateProvider.state('home', {
        url : '/home',
        templateUrl: '/components/home/homeView.html',
        controller : 'homeController'

    }).state('ViewCart',{
        url : '/view/cart',
        templateUrl: '/components/cart/cartView.html',
        controller : 'cartController'

    }).state('EditProduct', {
        url: '/edit/product/:product_id',
        templateUrl: '/components/editProduct/editProductView.html',
        controller: 'editProductController'

    }).state('Register', {
        url : '/user/signup',
        templateUrl: '/components/Authentication/registerView.html',
        controller : 'AuthenticationController',
        authenticate : false

    }).state('Login', {
        url : '/user/login',
        templateUrl: '/components/Authentication/LoginView.html',
        controller : 'AuthenticationController',
        authenticate : false

    }).state('PlaceOrder', {
        url : '/placeOrder',
        templateUrl: '/components/placeOrder/placeOrderView.html',
        controller : 'placeOrderController.js',

    }).state('ShippingDetails', {
        url : '/add/shippingdetails',
        templateUrl: '/components/placeOrder/EditShippingDetails.html',
        controller : 'placeOrderController.js',

    }).state('SearchProduct', {
        url : '/search/product',
        templateUrl: 'components/mainApp/searchProductView.html',
        controller : 'mainAppController',

    }).state('ViewProduct', {
        url : '/view/product/:product_id',
        templateUrl: 'components/viewProduct/viewProductView.html',
        controller : 'viewProductController'

    })
}]);


//Product Directive
app.directive('rajat', function(){
    return {
        restrict : 'EA',
        templateUrl : 'components/mainapp/ProductDirective.html',
        scope : {
            data : '=',
            like : '&',
            add: '&'
        },

        link : function(scope, elem , attrs){
            scope.a = 'from the directive'
        }
    }
})




