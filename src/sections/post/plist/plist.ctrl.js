myApp.controller('PostListController', ['$scope', '$http', 'myService', '$routeParams', function ($scope, $http, myService, $routeParams) {
    $scope.actually_page = parseInt($routeParams.page);
    $scope.rpp = parseInt($routeParams.rpp);

    myService.getPage($scope.rpp, $scope.actually_page).then(function (data) {
        $scope.posts = data.data.response;
    });

    myService.getCount().then(function (data) {
        $scope.num_posts = data.data.response;
        $scope.pages = myService.pagination($scope.num_posts, $scope.rpp, $scope.actually_page, 2);
    });

    $scope.page_name = "plist"
}]);
