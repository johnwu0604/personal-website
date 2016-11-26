/**
 * Created by JohnWu on 2016-11-26.
 */
angular.module('emailService', []).factory('Email', ['$http',function($http) {
    return {
        create : function(emailData) {
            return $http.post('/email', emailData);
        }
    }
}]);
