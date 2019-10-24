myApp.controller('PostViewController', ['$scope', '$http', 'myService', '$routeParams', function ($scope, $http, myService, $routeParams) {
    $scope.id = parseInt($routeParams.id);

    myService.getPost($scope.id).then(function (data) {
        $scope.post = data.data.response;
    });

    $scope.doTheBack = function() {
        window.history.back();
    };
}]);
