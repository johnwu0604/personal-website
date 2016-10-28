/**
 * Created by JohnWu on 2016-10-27.
 */
angular.module('languagesService', []).factory('Languages', ['$http',function($http) {
    return {
        get : function() {
            return $http.get('/api/languages');
        },
        create : function(languagesData) {
            return $http.post('/api/languages', languagesData);
        },
        delete : function(id) {
            return $http.delete('/api/languages/' + id);
        }
    }
}]);