myApp.controller('PostEditController', ['$scope', '$http', 'myService', '$routeParams', function ($scope, $http, myService, $routeParams) {
    $scope.id = parseInt($routeParams.id);

    myService.getPost($scope.id).then(function (data) {
        post = data.data.message;

        $scope.titulo = post.titulo
        $scope.cuerpo = post.cuerpo
        $scope.etiquetas = post.etiquetas
    });

    $scope.back = function () {
        window.history.back();
    };

    $scope.edit = function () {
        const datos = {
            id: $scope.id,
            titulo: $scope.titulo,
            cuerpo: $scope.cuerpo,
            etiquetas: $scope.etiquetas
        }
        var jsonToSend = {
            data: JSON.stringify(datos)
        };

        myService.updatePost(jsonToSend).then(function () {
            alert("Modificado");
        }, function() {
            alert("No modificado")
        });

        return false;
    }
}]);
