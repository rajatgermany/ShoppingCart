/**
 * Resource Factory with Custom Headers. It is used for making Ajax calls to the server for the product List
 */

angular.module('resourceFactory', [])
    .factory('resourceFactory', ['$resource', '$localStorage', function ($resource,$localStorage) {
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

    var Product = $resource('/api/user/products/:product_id', {product_id: '@product_id'}, actions);
        return Product;
}]);
