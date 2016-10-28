angular.module('mainController', [])

    .controller('adminController', ['$scope','$http','Jobs', 'Projects', function($scope, $http, Jobs, Projects) {

        $scope.formData = {};
        $scope.loading = true;

        // Load all the jobs
        Jobs.get().success(function(data) {
            $scope.jobs = data;
            $scope.loading = false;
        });

        // Add a job
        $scope.addJob = function() {
            if ($scope.formData != undefined) {
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





