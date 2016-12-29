/**
 * Created by JohnWu on 2016-10-27.
 */
angular.module('projectsService', []).factory('Projects', ['$http',function($http) {
    return {
        get : function() {
            return $http.get('/api/projects');
        },
        create : function(projectsData) {
            return $http.post('/api/projects', projectsData);
        },
        update : function(id, projectsData) {
            return $http.put('/api/projects/' + id, projectsData);
        },
        delete : function(id) {
            return $http.delete('/api/projects/' + id);
        }
    }
}]);