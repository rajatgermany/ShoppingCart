/**
 * Resource -> Object for Ajax request
 * User is presented with  Register Modal form
 * this factory returns a promise
 */

angular.module('AuthenticationApp')
    .factory('RegisterFactory', ['$resource','$rootScope','$modal','$q','$alert', function ($resource,$rootScope,$modal,$q , $alert) {
var RegisterFactory = {};
     var resource = $resource( 'api/user/Register');
        RegisterFactory.register = function(user) {
            var scope = $rootScope.$new();
            var register = $modal({templateUrl: 'components/Authentication/registerView.html', scope: scope, show: true});
            var deferred = $q.defer();
                scope.newUser = new resource;
                scope.newUser.data = user ;
                resource.save(scope.newUser , function(){
                    $alert({
                        title: 'Registration Successfull!',
                        content: 'Please Login',
                        animation: 'am-fade-and-slide-top',
                        placement: 'top',
                        type: 'info',
                        keyboard: false,
                        container: 'body',
                        show: true
                    });
                    register.hide();

                }, function(httpResponse){
                    $alert({
                        title: 'Registration Unsuccessful!',
                        animation: 'am-fade-and-slide-top',
                        placement: 'top',
                        type: 'info',
                        keyboard: false,
                        container: 'body',
                        show: true
                    });
                });
            return deferred.promise;
    }

    return RegisterFactory;





}]);


