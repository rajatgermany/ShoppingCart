angular.module('MovieApp')
    .factory('searchFactory', ['esFactory', '$q', '$location', function(elasticsearch, $q, $location){

    var client = elasticsearch({
        host: $location.host() + ':9200'
    });
    var searchFactory = {};
    searchFactory.search = function (term) {
        $location.search({'id':term})
        console.log(term)
        var deferred = $q.defer();
        client.search({
            index: 'shoppings',
            type: 'shopping',
            body: {
                query: {
                    match: {
                        _all: term
                    }
                }

            }
        }).then(function (result) {
            console.log(result)
            var hits = result.hits.hits
            var hit_out = []
            for (var i = 0; i < hits.length; i++) {
                hit_out.push(hits[i]);
            }
            deferred.resolve(hit_out);
        },function(value){
            deferred.resolve(value);
        })
        return deferred.promise;
    }

    return searchFactory
}]);