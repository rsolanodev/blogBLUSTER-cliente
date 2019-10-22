/* CORS */
myApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}])

/* Delete Prefix from URL */
myApp.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
}]);