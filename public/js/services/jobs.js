angular.module('jobsService', []).factory('Jobs', ['$http',function($http) {
    return {
        get : function() {
            return $http.get('/api/jobs');
        },
        create : function(jobsData) {
            return $http.post('/api/jobs', jobsData);
        },
        delete : function(id) {
            return $http.delete('/api/jobs/' + id);
        }
    }
}]);