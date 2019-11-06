myApp.controller('PostEditController', ['$scope', '$location', 'promisesService', '$routeParams', 'auth', function ($scope, $location, promisesService, $routeParams, auth) {
    $scope.authStatus = auth.data.status;
    if ($scope.authStatus != 200) {
        $location.path('/login');
    }
    
    $scope.id = parseInt($routeParams.id);
    $scope.success = false;
    $scope.failure = false;

    promisesService.getPost($scope.id).then(function (data) {
        let post = data.data.message;
        $scope.titulo = post.titulo;
        $scope.cuerpo = post.cuerpo;
        $scope.etiquetas = post.etiquetas;
        $scope.fecha = moment(post.fecha, 'DD/MM/YYYY HH:mm').toDate();
    });

    $scope.back = function () {
        window.history.back();
    };

    $scope.edit = function () {
        let datos = {
            id: $scope.id,
            titulo: $scope.titulo,
            cuerpo: $scope.cuerpo,
            etiquetas: $scope.etiquetas,
            fecha: $scope.fecha
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
