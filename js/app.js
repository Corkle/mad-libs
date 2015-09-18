angular.module('myApp', [])
    .constant('VERSION', 1.1)
    .controller('myCtrl', function (VERSION, $scope) {
        $scope.version = VERSION;
    });


$(document).ready(function () {
    $("input").on("focus", function () {
        $(this).select();
    });
});