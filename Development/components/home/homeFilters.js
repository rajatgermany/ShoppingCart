/**
 * Custom Filters for the Limiting the number of items on the Page
 */

angular.module('homeApp')
     .filter('newFilter', function($filter){
   return function(array,newpage ,size){
       var start = (newpage-1)* size;
       if(array.length < start){
           return []; // if number of products are less then the size of page
       }
       else {
           return $filter('limitTo')(array.splice(start), size)
       }
   }

}).filter('pagecount',function(){    // Counts the number of Pages require for the listing the Products
    return function(array, size){
        var count = [];
       for(var i = 0 ; i < Math.ceil(array.length)/size ; i ++){
           count.push(i);
       }
        return count ;

        }
});