angular.module('shared', [])
    .factory('userFactory', ['$resource', '$localStorage', function ($resource,$localStorage) {
    function getUserFromToken() {
        var Token = $localStorage.newToken;
        console.log('Ge the Token')
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
        var User = $resource('/api/user/GetUser', {id: '@id'}, actions);
        return User;


}]);
