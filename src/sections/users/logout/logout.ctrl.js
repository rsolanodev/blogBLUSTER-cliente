myApp.controller('LogoutController', ['$scope', 'promisesService', '$window', '$location', '$rootScope', function ($scope, promisesService, $window, $location, $rootScope) {
    $scope.logout = () => {
        promisesService.logout().then((response) => {
            if (response.data.status === 200) {
                $window.sessionStorage.removeItem('username');
                $rootScope.$emit('CallUser');
                $location.path("/login");
            } else {
                alert("No se ha podido cerrado sesión");
            }
        });
    };
}]);
