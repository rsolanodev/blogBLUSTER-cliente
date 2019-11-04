myApp.controller('LogoutController', ['$scope', 'promisesService', '$location', 'auth', '$rootScope', '$window', function ($scope, promisesService, $location, auth, $rootScope, $window) {
    if (auth.data.status !== 200) {
        $location.path('/login');
    }
    
    $scope.logout = () => {
        promisesService.logout().then((response) => {
            if (response.data.status === 200) {
                $window.sessionStorage.removeItem('username');
                $rootScope.$emit('CallUser');
                $location.path("/login");
            } else {
                console.log("Error trying to logout");
            }
        });
    };
}]);
