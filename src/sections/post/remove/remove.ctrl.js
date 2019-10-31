myApp.controller('PostRemoveController', ['$scope', '$http', 'myService', '$routeParams', function ($scope, $http, myService, $routeParams) {
    $scope.id = parseInt($routeParams.id);

    myService.getPost($scope.id).then(function (data) {
        $scope.post = data.data.message;
    });

    $scope.back = function() {
        window.history.back();
    };

    $scope.remove = function() {
        myService.removePost($scope.id).then(function () {
            $scope.back();
        });
    }

}]);
