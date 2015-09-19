angular.module('myApp', [])
    .constant('VERSION', "1.0")
    .controller('myCtrl', function (VERSION, $scope) {
        $scope.version = VERSION;
    })
    .controller('wordCtrl', function ($scope) {
        var gender = "";

        $scope.genderOptions = ["Male", "Female"];
        $scope.updateGender = function (selGender) {
            if (selGender) {
                gender = selGender;
                $scope.noGenderError = false;
            }
            else {
                $scope.noGenderError = true;
            }
        };
        $scope.updateStory = function () {
            if ($scope.wordForm.$valid) {
                $scope.invalidFormError = false;
                if (gender == "Male") {
                    $scope.his_her = "his";
                    $scope.he_she = "he";
                    $scope.him_her = "him";
                } else if (gender == "Female") {
                    $scope.his_her = "her";
                    $scope.he_she = "she";
                    $scope.him_her = "her";
                } else {
                    console.log("IDK what it is");
                }

                $scope.name = $scope.name_input;
                $scope.job_title = $scope.job_title_input;
                $scope.tedious_task = $scope.tedious_task_input;
                $scope.dirty_task = $scope.dirty_task_input;
                $scope.celebrity = $scope.celebrity_input;
                $scope.useless_skill = $scope.useless_skill_input;
                $scope.adjective = $scope.adjective_input;
                $scope.obnoxiuous_celebrity = $scope.obnoxiuous_celebrity_input;
                $scope.huge_number = $scope.huge_number_input;

                $scope.showStory = true;
            } else {
                $scope.invalidFormError = true;
                $scope.updateGender($scope.selectedGender);
            }
        };
        $scope.resetForm = function () {
            $scope.name_input = "";
            $scope.noGenderError = false;
            $scope.invalidFormError = false;
            $scope.selectedGender = "";
            $scope.showStory = false;
        };
    });