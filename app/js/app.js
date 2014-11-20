
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

        $scope.title = "Home Page";

        api.getPersons().then(function(data) {
            $scope.persons = data;
        });
    });
angular.module('gulpApp.main', [])

/**
 * @ngdoc service
 * @name $customTimeout
 *
 * @description
 * Angular's wrapper for `window.setTimeout`. The `fn` function is wrapped into a try/catch
 * block and delegates any exceptions to
 * {@link ng.$exceptionHandler $exceptionHandler} service.
 *
 * The return value of registering a timeout function is a promise, which will be resolved when
 * the timeout is reached and the timeout function is executed.
 *
 * To cancel a timeout request, call `$timeout.cancel(promise)`.
 *
 * In tests you can use {@link ngMock.$timeout `$timeout.flush()`} to
 * synchronously flush the queue of deferred functions.
 *
 * @param {function()} fn A function, whose execution should be delayed.
 * @param {number=} [delay=0] Delay in milliseconds.
 * @param {boolean=} [invokeApply=true] If set to `false` skips model dirty checking, otherwise
 *   will invoke `fn` within the {@link ng.$rootScope.Scope#$apply $apply} block.
 * @returns {Promise} Promise that will be resolved when the timeout is reached. The value this
 *   promise will be resolved with is the return value of the `fn` function.
 *
 */

    .controller('MainCtrl', function($scope, $ionicModal, $timeout) {
        // Form data for the login modal
        $scope.main = "Main Data";
    });


angular.module('gulpApp.rest', [])
    .factory("api", function($q, $timeout) {

        return {
            getPersons: function() {
                var deferred = $q.defer();

                var persons = [
                    {
                        Name: "Cihad",
                        Surname: "Horuzoglu"
                    },
                    {
                        Name: "Erdi",
                        Surname: "Acar"
                    },
                    {
                        Name: "Mustafa",
                        Surname: "Gur"
                    },
                    {
                        Name: "Mahir",
                        Surname: "Calisir"
                    },
                    {
                        Name: "Onur Alp",
                        Surname: "Taner"
                    }
                ];

                $timeout(function() {
                    deferred.resolve(persons);
                }, 500);

                return deferred.promise;
            }
        }
    });