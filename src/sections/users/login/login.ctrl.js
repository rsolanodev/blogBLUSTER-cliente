myApp.controller('LoginController', ['$scope', '$rootScope', 'promisesService', '$window', '$location', function ($scope, $rootScope, promisesService, $window, $location) {
    $scope.username = "";
    $scope.password = "";
    $scope.fail_auth = false;

    $scope.submitLogin = () => {
        promisesService.login($scope.username, $scope.password).then((response) => {
            if (response.data.status === 200) {
                $window.sessionStorage.setItem("username", $scope.username);
                $rootScope.$emit('CallUser');
                $location.path("/");
            } else {
                $scope.fail_auth = true
            }
        });
    };
}]);
