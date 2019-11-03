myApp.factory('sessionService', ['$q', 'promisesService', '$location', function ($q, promisesService, $location) {
    return {
        anyPromise: function () {
            const deferred = $q.defer();
            deferred.resolve();
            return deferred;
        },
        authPromise: function () {
            const deferred = $q.defer();
            promisesService.checkAuth().then(function (response) {
                if (response.data.status === 200) {
                    deferred.resolve();
                } else {
                    deferred.reject();
                    const nextUrl = $location.url();
                    if (nextUrl !== '/' && nextUrl !== '/home' && nextUrl !== '/login') {
                        $location.path("/login");
                    }
                }
            }, function () {
                deferred.reject();
            }).catch(function () {
                deferred.reject();
            });
            return deferred;
        },
        setNextURL: function (value) {
            let nextUrl = value;
        }
    }
}]);
