myApp.controller('PostNewController', ['$scope', '$location', 'promisesService', 'auth', function ($scope, $location, promisesService, auth) {
    if (auth.data.status != 200) {
        $location.path('/login');
    }

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
