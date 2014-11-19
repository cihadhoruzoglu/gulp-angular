
angular.module('gulpApp', ['ionic', 'templates', 'gulpApp.main', 'gulpApp.home', 'gulpApp.rest'])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "partials/menu.html",
                controller: 'MainCtrl'
            })

            .state('app.home', {
                url: "/home",
                views: {
                    'menuContent' :{
                        templateUrl: "partials/home.html",
                        controller: "HomeCtrl"
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    });


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

        api.searchVenue('test').then(function(data) {
            $scope.venues = data;
        });

        $scope.sayHi = function(text) {
            return "Hi, " + text;
        }
    });
angular.module('gulpApp.main', [])

    .controller('MainCtrl', function($scope, $ionicModal, $timeout) {
        // Form data for the login modal
        $scope.main = "Main Data";
    });


angular.module('gulpApp.rest', [])
    .factory("api", function($http) {
        var apiUrl          = 'https://api.foursquare.com/v2/',
            clientId        = 'Y4CWC5KQZALA0U5UWRX44C2I5ZXJDXZZIOPSENLNUYNU4YHK',
            clientSecret    = 'C3MEUFC0BY1KIEYRZTFAS1CA1OHBIOQ0Z22KC1E4GU435QZW',
            v               = '20140815';

        return {
            searchVenue: function(searchText) {
                var promise =  $http({
                    url: apiUrl + 'venues/search?',
                    method: "GET",
                    params: {
                        client_id: clientId,
                        client_secret: clientSecret,
                        v: v,
                        near: 'Istanbul,tr',
                        query: searchText
                    }
                });

                return promise;
            },
            getVenue: function(venueId, success) {
                $http({
                    url: apiUrl + 'venues/' + venueId,
                    method: "GET",
                    params: {
                        client_id: clientId,
                        client_secret: clientSecret,
                        v: v
                    }
                })
                    .success(function(data) {
                        success(data);
                    });
            }
        }
    });