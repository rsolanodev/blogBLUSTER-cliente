const anyPromise = function (sessionService) {
    return sessionService.anyPromise();
};

const authPromise = function (sessionService) {
    return sessionService.authPromise();
};

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'src/sections/home/home.tpl.html',
        controller: 'HomeController',
        resolve: { auth: anyPromise }
    }).when('/post/plist/:rpp/:page', {
        templateUrl: 'src/sections/post/plist/plist.tpl.html',
        controller: 'PostListController',
        resolve: { auth: authPromise }
    }).when('/post/view/:id', {
        templateUrl: 'src/sections/post/view/view.tpl.html',
        controller: 'PostViewController',
        resolve: { auth: anyPromise }
    }).when('/post/remove/:id', {
        templateUrl: 'src/sections/post/remove/remove.tpl.html',
        controller: 'PostRemoveController',
        resolve: { auth: authPromise }
    }).when('/post/edit/:id', {
        templateUrl: 'src/sections/post/edit/edit.tpl.html',
        controller: 'PostEditController',
        resolve: { auth: authPromise }
    }).when('/post/new', {
        templateUrl: 'src/sections/post/new/new.tpl.html',
        controller: 'PostNewController',
        resolve: { auth: authPromise }
    }).when('/login', {
        templateUrl: 'src/sections/users/login/login.tpl.html',
        controller: 'LoginController',
        resolve: { auth: anyPromise }
    }).when('/logout', {
        templateUrl: 'src/sections/users/logout/logout.tpl.html',
        controller: 'LogoutController',
        resolve: { auth: authPromise }
    }).otherwise({
        redirectTo: '/'
    });
});
