myApp.controller('PostListController', ['$scope', '$location', 'promisesService', '$routeParams', '$window', '$location', 'auth', function ($scope, $location, promisesService, $routeParams, $window, $location, auth) {
    $scope.authStatus = auth.data.status;
    if ($scope.authStatus != 200) {
        $location.path('/login');
    }

    $scope.actually_page = parseInt($routeParams.page);
    $scope.rpp = parseInt($routeParams.rpp);

    $scope.colOrder = $routeParams.colOrder;
    $scope.order = $routeParams.order;

    $scope.full_url = function() {
        let url = $location.absUrl();
        return url.substring(0, 48);
    };

    $scope.buildURL = function() {
        if ($scope.colOrder !== undefined && $scope.order !== undefined) {
            return `/${$scope.colOrder}/${$scope.order}`;
        } else {
            return '';
        }
    };


    promisesService.getPage($scope.rpp, $scope.actually_page, $scope.colOrder, $scope.order).then(function (data) {
        $scope.posts = data.data.message;
    });

    promisesService.getCount().then(function (data) {
        $scope.num_posts = data.data.message;
        $scope.pages = promisesService.pagination($scope.num_posts, $scope.rpp, $scope.actually_page, 2);

        if ($scope.pages.indexOf($scope.actually_page) === -1) {
            $window.location.href = `./post/plist/${$scope.rpp}/1`;
        } else {
            $scope.is_ready = true
        }
    });

    $scope.page_name = "plist"
}]);
