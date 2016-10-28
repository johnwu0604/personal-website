/**
 * Created by JohnWu on 2016-10-27.
 */
angular.module('frameworksService', []).factory('Frameworks', ['$http',function($http) {
    return {
        get : function() {
            return $http.get('/api/frameworks');
        },
        create : function(frameworksData) {
            return $http.post('/api/frameworks', frameworksData);
        },
        delete : function(id) {
            return $http.delete('/api/frameworks/' + id);
        }
    }
}]);
