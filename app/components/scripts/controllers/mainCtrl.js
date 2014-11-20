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
