myApp.controller('HomeController', ['$scope', '$http', 'promisesService', '$routeParams', function ($scope, $http, promisesService, $routeParams) {
    $scope.actually_page = parseInt($routeParams.page);
    $scope.rpp = parseInt($routeParams.rpp);

    promisesService.getPage(10, 1, "id", "desc").then(function (data) {
        $scope.posts = data.data.message;
    });
    
    $scope.getBadges = function(str) {
        return str.trim().split(" ");
    }

}]);
