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
    }).when('/post/edit/:id', {
        templateUrl: 'src/sections/post/edit/edit.tpl.html',
        controller: 'PostEditController'
    }).when('/post/new', {
        templateUrl: 'src/sections/post/new/new.tpl.html',
        controller: 'PostNewController'
    }).when('/login', {
        templateUrl: 'src/sections/users/login/login.tpl.html',
        controller: 'LoginController'
    }).when('/logout', {
        templateUrl: 'src/sections/users/logout/logout.tpl.html',
        controller: 'LogoutController'
    }).otherwise({
        redirectTo: '/'
    });
});
