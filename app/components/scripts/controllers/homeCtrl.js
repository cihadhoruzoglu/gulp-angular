angular.module('gulpApp.home', [])

    .controller('HomeCtrl', function($scope, api) {

        $scope.title = "Home Page";

        api.getPersons().then(function(data) {
            $scope.persons = data;
        });
    });