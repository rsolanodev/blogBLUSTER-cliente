myApp.controller('PostEditController', ['$scope', '$http', 'myService', '$routeParams', function ($scope, $http, myService, $routeParams) {
    $scope.id = parseInt($routeParams.id);

    myService.getPost($scope.id).then(function (data) {
        post = data.data.response;

        $scope.titulo = post.titulo
        $scope.cuerpo = post.cuerpo
        $scope.etiquetas = post.etiquetas
    });

    $scope.back = function () {
        window.history.back();
    };

    $scope.edit = function () {
        $scope.data = {
            "id": $scope.id,
            "titulo": post.titulo,
            "cuerpo": post.cuerpo,
            "etiquetas": post.etiquetas
        };

        myService.updatePost($scope.data).then(function () {
            $scope.back();
        });

        return false;
    }
}]);
