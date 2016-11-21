angular.module('mainController', [])

    .controller('controller', ['$scope','$http','Jobs', 'Projects', 'Languages', 'Frameworks', function($scope, $http, Jobs, Projects, Languages, Frameworks) {

        // Jobs =================================================================

        $scope.jobsFormData = {};
        $scope.loading = true;

        // Load all the jobs
        Jobs.get().success(function(data) {
            $scope.jobs = data;
            $scope.loading = false;
        });

        // Add a job
        $scope.addJob = function() {
            if ($scope.jobsFormData != undefined) {
                $scope.loading = true;
                Jobs.create($scope.jobsFormData).success(function(data) {
                    $scope.loading = false;
                    $scope.jobsFormData = {};
                    $scope.jobs = data;
                });
            }
        };

        // Delete a job
        $scope.deleteJob = function(id) {
            $scope.loading = true;
            Jobs.delete(id).success(function(data) {
                $scope.loading = false;
                $scope.jobs = data;
            });
        };

        // Projects =================================================================

        $scope.projectsFormData = {};
        $scope.loading = true;

        // Load all the projects
        Projects.get().success(function(data) {
            $scope.projects = data;
            $scope.loading = false;
        });

        // Add a project
        $scope.addProject = function() {
            if ($scope.projectsFormData != undefined) {
                $scope.loading = true;
                Projects.create($scope.projectsFormData).success(function(data) {
                    $scope.loading = false;
                    $scope.projectsFormData = {};
                    $scope.projects = data;
                });
            }
        };

        // Delete a project
        $scope.deleteProject = function(id) {
            $scope.loading = true;
            Projects.delete(id).success(function(data) {
                $scope.loading = false;
                $scope.projects = data;
            });
        };

        // Languages =================================================================

        $scope.languagesFormData = {};
        $scope.loading = true;

        // Load all the languages
        Languages.get().success(function(data) {
            $scope.languages = data;
            $scope.loading = false;
        });

        // Add a language
        $scope.addLanguage = function() {
            if ($scope.languagesFormData != undefined) {
                $scope.loading = true;
                Languages.create($scope.languagesFormData).success(function(data) {
                    $scope.loading = false;
                    $scope.languagesFormData = {};
                    $scope.languages = data;
                });
            }
        };

        // Delete a language
        $scope.deleteLanguage = function(id) {
            $scope.loading = true;
            Languages.delete(id).success(function(data) {
                $scope.loading = false;
                $scope.languages = data;
            });
        };


        // Frameworks =================================================================

        $scope.frameworksFormData = {};
        $scope.loading = true;

        // Load all the frameworks
        Frameworks.get().success(function(data) {
            $scope.frameworks = data;
            $scope.loading = false;
        });

        // Add a framework
        $scope.addFramework = function() {
            if ($scope.frameworksFormData != undefined) {
                $scope.loading = true;
                Frameworks.create($scope.frameworksFormData).success(function(data) {
                    $scope.loading = false;
                    $scope.frameworksFormData = {};
                    $scope.frameworks = data;
                });
            }
        };

        // Delete a framework
        $scope.deleteFramework = function(id) {
            $scope.loading = true;
            Frameworks.delete(id).success(function(data) {
                $scope.loading = false;
                $scope.frameworks = data;
            });
        };


    }]);





