myApp.controller('PostNewController', ['$scope', '$http', 'myService', '$routeParams', function ($scope, $http, myService, $routeParams) {
    $scope.success = false;
    $scope.failure = false;

    $scope.new = function () {
        const datos = {
            titulo: $scope.titulo,
            cuerpo: $scope.cuerpo,
            etiquetas: $scope.etiquetas
        }
        var jsonToSend = {
            data: JSON.stringify(datos)
        };

        myService.newPost(jsonToSend).then(() => {
            $scope.success = true;
        }, () => {
            $scope.success = true;
        });
    }

    $scope.back = function () {
        window.history.back();
    };

}]);