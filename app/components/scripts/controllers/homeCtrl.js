angular.module('gulpApp.home', [])

    .controller('HomeCtrl', function($scope, api) {
        $scope.items = [
            { title: 'Reggae', id: 1 },
            { title: 'Chill', id: 2 },
            { title: 'Dubstep', id: 3 },
            { title: 'Indie', id: 4 },
            { title: 'Rap', id: 5 },
            { title: 'Cowbell', id: 6 }
        ];

        $scope.test = "Test2";

        api.searchVenue('test').then(function(data) {
            $scope.venues = data;
        });

        $scope.sayHi = function(text) {
            return "Hi, " + text;
        }
    });