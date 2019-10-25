myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'src/sections/home/home.tpl.html',
        controller: 'HomeController'
    }).when('/about', {
        templateUrl: 'src/sections/about/about.tpl.html',
        controller: 'AboutController'
    }).when('/post/plist/:rpp/:page', {
        templateUrl: 'src/sections/post/plist/plist.tpl.html',
        controller: 'PostListController'
    }).when('/post/view/:id', {
        templateUrl: 'src/sections/post/view/view.tpl.html',
        controller: 'PostViewController'
    }).when('/post/remove/:id', {
        templateUrl: 'src/sections/post/remove/remove.tpl.html',
        controller: 'PostRemoveController'
    }).otherwise({
        redirectTo: '/'
    });
});
