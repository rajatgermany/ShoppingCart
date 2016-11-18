angular.module('cart')
    .factory('CartResourceFactory', ['$resource', '$localStorage', function ($resource,$localStorage) {
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

    $resource('/api/movies/:id', {id: '@id'}, actions);
        var Cart = $resource('/api/cart/Cart/:cart_id',{cart_id:'@cart_id'}, actions);
        return Cart;
}]);
/**
 * Created by Mani on 13-10-2016.
 */
