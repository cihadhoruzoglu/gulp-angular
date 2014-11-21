angular.module('gulpApp.home', [])

    .controller('HomeCtrl', function($scope, api) {

        $scope.title = "Anasayfa";

        api.getPersons().then(function(data) {
            $scope.persons = data;
        });
    });