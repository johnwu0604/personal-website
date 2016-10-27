angular.module('jobsController', [])

    .controller('mainJobController', ['$scope','$http','Jobs', function($scope, $http, Jobs) {
    $scope.formData = {};
    $scope.loading = true;

    // Load all the jobs
    Jobs.get().success(function(data) {
        $scope.jobs = data;
        $scope.loading = false;
    });

    // Add a job
    $scope.addJob = function() {
        if ($scope.formData.text != undefined) {
            $scope.loading = true;
            Jobs.create($scope.formData).success(function(data) {
                $scope.loading = false;
                $scope.formData = {};
                $scope.jobs = data;
            });
        }
    };

    // Delete a job
    $scope.deleteJob = function(id) {
        $scope.loading = true;
        Jobs.delete(id).success(function(data) {
            $scope.loading = false;
            $scope.jobs = data; // assign our new list of todos
        });
    };

}]);