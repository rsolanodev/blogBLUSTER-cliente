myApp.controller('PostListController', ['$scope', '$http', 'myService', '$routeParams', '$window', function ($scope, $http, myService, $routeParams, $window) {
    $scope.actually_page = parseInt($routeParams.page);
    $scope.rpp = parseInt($routeParams.rpp);

    myService.getPage($scope.rpp, $scope.actually_page).then(function (data) {
        $scope.posts = data.data.response;
    });

    myService.getCount().then(function (data) {
        $scope.num_posts = data.data.response;
        $scope.pages = myService.pagination($scope.num_posts, $scope.rpp, $scope.actually_page, 2);

        if($scope.pages.indexOf($scope.actually_page) === -1) {
            $window.location.href = `./post/plist/${$scope.rpp}/1`;
        } else {
            $scope.is_ready = true
        }
    });

    $scope.page_name = "plist"
}]);
