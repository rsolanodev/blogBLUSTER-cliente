myApp.controller('PostNewController', ['$scope', '$http', 'promisesService', '$routeParams', function ($scope, $http, promisesService, $routeParams) {
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

        promisesService.newPost(jsonToSend).then(() => {
            $scope.success = true;
        }, () => {
            $scope.failure = true;
        });
    };

    $scope.back = function () {
        window.history.back();
    };

}]);
