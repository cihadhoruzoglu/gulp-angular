
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

