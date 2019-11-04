myApp.controller('PostRemoveController', ['$scope', '$location', 'promisesService', '$routeParams', 'auth', function ($scope, $location, promisesService, $routeParams, auth) {
    $scope.authStatus = auth.data.status;
    if ($scope.authStatus != 200) {
        $location.path('/login');
    }
    
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
