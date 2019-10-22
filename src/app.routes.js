myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'src/sections/home/home.tpl.html',
        controller: 'HomeController'
    }).when('/about', {
        templateUrl: 'src/sections/about/about.tpl.html',
        controller: 'AboutController'
    }).otherwise({
        redirectTo: '/'
    });
});