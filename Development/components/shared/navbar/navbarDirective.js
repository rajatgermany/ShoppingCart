angular.module('navBar', [])
    .directive('navdirective', function($localStorage,$state,$location,$window , $rootScope,GetTokenFactory,cartFactory, $modal,$alert) {

    return {
        restrict: 'E',
        templateUrl: 'components/shared/navbar/navBarTemplate.html',
        link: function (scope, elem, attrs) {
            scope.Logout = function () {
                var scope1 = $rootScope.$new();
                scope1.items = scope.ItemCount
                scope1.response = function (res) {
                    if (res == 'yes') {
                        delete $localStorage.newToken;  // User token is deleted
                        scope.ItemCount = 0;
                        scope.Total = 0;
                        logout.hide();
                        $state.go('Login')  //User is sent to the Login State and is presented with alert
                        $alert({title: 'Please Login to Continue!',
                            animation: 'am-fade-and-slide-top', placement: 'top', type: 'info', keyboard: false, container:'body', show: true});
                    }
                    else if (res == 'no') {  //User wish to stay
                        logout.hide();
                        $alert({title: 'Continue Shopping!',
                            animation: 'am-fade-and-slide-top', placement: 'top', type: 'info', keyboard: false, container:'body', show: true});
                    }
                }

               var logout = $modal({templateUrl: 'components/shared/navbar/LogoutView.html', scope: scope1, show: true});
            }

            // Generates the ItemCount and Total Amount
            cartFactory.ItemCount().then(function (result) {
                    scope.ItemCount = result
                    scope.Total = cartFactory.Total();
                }, function (error) {
                    scope.error = 'has failed... ' + error;
                })

// hears for the event 'myEvent'
            scope.$on('myEvent', function(event,data) {
                cartFactory.ItemCount().then(function (result) {
                    scope.ItemCount = result
                    scope.data = cartFactory.CartData;
                    scope.Total = cartFactory.Total();
                }, function (error) {
                    scope.error = 'has failed... ' + error;
                })
            });
            scope.class  = function() {

                return 'a';
            }
        }
    }




})
