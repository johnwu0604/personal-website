/**
 * Created by JohnWu on 2016-10-27.
 */
angular.module('projectsService', []).factory('Projects', ['$http',function($http) {
    return {
        get : function() {
            return $http.get('/api/projects');
        },
        create : function(jobsData) {
            return $http.post('/api/projects', projectsData);
        },
        delete : function(id) {
            return $http.delete('/api/projects/' + id);
        }
    }
}]);