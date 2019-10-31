myApp.controller('LoginController', ['$scope', '$http', 'myService', '$routeParams', function ($scope, $http, myService, $routeParams) {
    $scope.fallo = false;
    $scope.hecho = false;
    $scope.falloMensaje = "";    
}]);
