angular.module('mainController', [])

    .controller('controller', ['$scope','$http', 'Email',
        function($scope, $http, Email) {


        // Email =================================================================

        $scope.emailFormData = {};
        $scope.loading = true;

        // Add a job
        $scope.sendEmail = function() {

            $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
                preventSubmit: true,
                submitError: function($form, event, errors) {

                },
                submitSuccess: function($form, event) {
                    event.preventDefault(); // prevent default submit behaviour
                    event.stopImmediatePropagation();
                    if ($scope.emailFormData != undefined) {
                        $scope.loading = true;
                        Email.create($scope.emailFormData).success(function(data) {
                            if (data.yo == 'error') {
                                $('#success').html("<div class='alert alert-danger'>");
                                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                                    .append("</button>");
                                $('#success > .alert-danger').append("<strong>Sorry " + $scope.emailFormData.name + ", it seems that my mail server is not responding. Please try again later!");
                                $('#success > .alert-danger').append('</div>');
                                //clear all fields
                                $('#contactForm').trigger("reset");
                            } else {
                                $scope.loading = false;
                                $scope.emailFormData = {};

                                $('#success').html("<div class='alert alert-success'>");
                                $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                                    .append("</button>");
                                $('#success > .alert-success')
                                    .append("<strong>Your message has been sent. </strong>");
                                $('#success > .alert-success')
                                    .append('</div>');
                                //clear all fields
                                $('#contactForm').trigger("reset");
                            }
                        });
                    }
                }
            });
        };


    }]);





