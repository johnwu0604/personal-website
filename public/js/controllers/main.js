angular.module('todoController', [])

    .controller('mainController', ['$scope','$http','Todos','Jobs', function($scope, $http, Todos, Jobs) {
        $scope.formData = {};
        $scope.loading = true;

        // GET =====================================================================
        // when landing on the page, get all todos and show them
        // use the service to get all the todos
        Todos.get()
            .success(function(data) {
                $scope.todos = data;
                $scope.loading = false;
            });

        // CREATE ==================================================================
        // when submitting the add form, send the text to the node API
        $scope.createTodo = function() {

            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            if ($scope.formData.text != undefined) {
                $scope.loading = true;

                // call the create function from our service (returns a promise object)
                Todos.create($scope.formData)

                // if successful creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.loading = false;
                        $scope.formData = {}; // clear the form so our user is ready to enter another
                        $scope.todos = data; // assign our new list of todos
                    });
            }
        };

        // DELETE ==================================================================
        // delete a todo after checking it
        $scope.deleteTodo = function(id) {
            $scope.loading = true;

            Todos.delete(id)
            // if successful creation, call our get function to get all the new todos
                .success(function(data) {
                    $scope.loading = false;
                    $scope.todos = data; // assign our new list of todos
                });
        };


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





