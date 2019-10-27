myApp.controller('HomeController', ['$scope', '$http', 'myService', '$routeParams', function ($scope, $http, myService, $routeParams) {
    $scope.actually_page = parseInt($routeParams.page);
    $scope.rpp = parseInt($routeParams.rpp);

    myService.getPage(5, 1).then(function (data) {
        $scope.posts = data.data.response;
    });
    
    $scope.getBadges = function(str) {
        return str.trim().split(" ");
    }

}]);
