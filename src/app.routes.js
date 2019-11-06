myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'src/sections/home/home.tpl.html',
        controller: 'HomeController'
    }).when('/post/plist/:rpp/:page/:colOrder?/:order?', {
        templateUrl: 'src/sections/post/plist/plist.tpl.html',
        controller: 'PostListController',
        resolve: {
            auth: function (promisesService) {
                return promisesService.checkAuth();
            }
        }
    }).when('/post/view/:id', {
        templateUrl: 'src/sections/post/view/view.tpl.html',
        controller: 'PostViewController'
    }).when('/post/remove/:id', {
        templateUrl: 'src/sections/post/remove/remove.tpl.html',
        controller: 'PostRemoveController',
        resolve: {
            auth: function (promisesService) {
                return promisesService.checkAuth();
            }
        }
    }).when('/post/edit/:id', {
        templateUrl: 'src/sections/post/edit/edit.tpl.html',
        controller: 'PostEditController',
        resolve: {
            auth: function (promisesService) {
                return promisesService.checkAuth();
            }
        }
    }).when('/post/new', {
        templateUrl: 'src/sections/post/new/new.tpl.html',
        controller: 'PostNewController',
        resolve: {
            auth: function (promisesService) {
                return promisesService.checkAuth();
            }
        }
    }).when('/login', {
        templateUrl: 'src/sections/users/login/login.tpl.html',
        controller: 'LoginController'
    }).when('/logout', {
        templateUrl: 'src/sections/users/logout/logout.tpl.html',
        controller: 'LogoutController',
        resolve: {
            auth: function (promisesService) {
                return promisesService.checkAuth();
            }
        }
    }).otherwise({
        redirectTo: '/'
    });
}]);