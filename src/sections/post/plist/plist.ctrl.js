myApp.controller('PostListController', ['$scope', '$http', 'promisesService', '$routeParams', '$window', '$location', function ($scope, $http, promisesService, $routeParams, $window, $location) {
    $scope.actually_page = parseInt($routeParams.page);
    $scope.rpp = parseInt($routeParams.rpp);

    $scope.order = $location.search().order;
    $scope.direction = $location.search().direction;

    $scope.full_url = function() {
        let url = $location.absUrl();
        return url.indexOf('?') === -1 ? url : url.substring(0, url.indexOf('?'));
    };

    $scope.buildURL = function() {
        if ($scope.order !== undefined && $scope.direction !== undefined) {
            return `?order=${$scope.order}&direction=${$scope.direction}`;
        } else if ($scope.order !== undefined && $scope.direction === undefined) {
            return `?order=${$scope.order}`;
        } else {
            return '';
        }
    };


    promisesService.getPage($scope.rpp, $scope.actually_page, $scope.order, $scope.direction).then(function (data) {
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
