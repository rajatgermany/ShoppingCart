/**
 * Tells or checks wheter user is having the Token or not!!
 */
angular.module('AuthenticationApp')
    .factory('GetTokenFactory', function($localStorage){
        var Factory = {};
        Factory.GetToken = function(i){
        
        if(i){
            return true
        }
        else{
            return false
        }
    }

        return Factory;
})
