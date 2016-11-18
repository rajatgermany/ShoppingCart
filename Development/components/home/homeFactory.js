
/**
 * Angular resource AJAX factory with custom Headers
 */
angular.module('homeApp')
     .factory('homeFactory', ['$resource', '$localStorage', function ($resource,$localStorage) {
    function getUserFromToken() {
        var Token = $localStorage.newToken;
        return {'Authorization': Token}
    }
    var headers = getUserFromToken();
    // Assemble actions with custom headers attached
    var actions = {
        'get'   : {method: 'GET', headers: headers},
        'save'  : {method: 'POST', headers: headers},
        'create': {method: 'POST', headers: headers},
        'query' : {method: 'GET', isArray: true, headers: headers},
        'remove': {method: 'DELETE', headers: headers},
        'delete': {method: 'DELETE', headers: headers},
        'update': {method: 'PUT', headers: headers}
    };

    var homeFactory = $resource('/api/user/AddLike/:id', {id: '@id'}, actions);
         return homeFactory;


}]);

