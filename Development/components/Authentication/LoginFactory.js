/**
 * Ajax Request to the Login API
 */
angular.module('AuthenticationApp')
    .factory('LoginFactory', ['$resource', function ($resource) {
    return $resource( 'api/user/Login')
}]);

