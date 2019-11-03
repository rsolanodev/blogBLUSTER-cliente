myApp.controller('PostEditController', ['$scope', '$http', 'promisesService', '$routeParams', function ($scope, $http, promisesService, $routeParams) {
    $scope.id = parseInt($routeParams.id);
    $scope.success = false;
    $scope.failure = false;

    promisesService.getPost($scope.id).then(function (data) {
        let post = data.data.message;
        $scope.titulo = post.titulo;
        $scope.cuerpo = post.cuerpo;
        $scope.etiquetas = post.etiquetas;
    });

    $scope.back = function () {
        window.history.back();
    };

    $scope.edit = function () {
        let datos = {
            id: $scope.id,
            titulo: $scope.titulo,
            cuerpo: $scope.cuerpo,
            etiquetas: $scope.etiquetas
        };

        let jsonToSend = {
            data: JSON.stringify(datos)
        };

        promisesService.updatePost(jsonToSend).then(function () {
            $scope.success = true;
        }, function() {
            $scope.failure = true;
        });
    }
}]);
