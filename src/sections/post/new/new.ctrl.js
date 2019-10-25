myApp.controller('PostNewController', ['$scope', '$http', 'myService', '$routeParams', function ($scope, $http, myService, $routeParams) {
    $scope.new = function () {
        $scope.data = {
            "titulo": $scope.titulo,
            "cuerpo": $scope.cuerpo,
            "etiquetas": $scope.etiquetas
        };

        myService.newPost($scope.data).then(function () {
            $scope.back();
        });
    }
}]);
