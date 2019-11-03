myApp.controller('PostRemoveController', ['$scope', '$http', 'promisesService', '$routeParams', function ($scope, $http, promisesService, $routeParams) {
    $scope.id = parseInt($routeParams.id);

    promisesService.getPost($scope.id).then(function (data) {
        $scope.post = data.data.message;
    });

    $scope.back = function() {
        window.history.back();
    };

    $scope.remove = function() {
        promisesService.removePost($scope.id).then(function () {
            $scope.back();
        });
    }
}]);
