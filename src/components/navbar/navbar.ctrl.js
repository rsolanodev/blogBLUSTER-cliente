myApp.controller('NavbarController', ['$scope', 'promisesService', '$location', '$window', '$rootScope', function ($scope, promisesService, $location, $window, $rootScope) {

    $rootScope.$on("CallUser", function(){
        $scope.updateAuth();
    });

    $scope.updateAuth = function() {
        $scope.user = $window.sessionStorage.getItem("username");
    };

    $scope.isActive = function (viewLocation) {
        $scope.location = $location.path();

        if ($scope.location.indexOf("/post/plist") === 0) {
            $scope.location = "/post/plist";
        }

        return viewLocation === $scope.location;
    };
}]);
