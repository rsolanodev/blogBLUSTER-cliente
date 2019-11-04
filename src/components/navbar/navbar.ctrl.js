myApp.controller('NavbarController', ['$scope', '$location', 'promisesService', '$rootScope', '$window', function ($scope, $location, promisesService, $rootScope, $window) {
    $rootScope.$on("CallUser", function(){
        $scope.updateAuth();
    });

    $scope.updateAuth = function() {
        if($window.sessionStorage.getItem("username") !== null) {
            $scope.user = $window.sessionStorage.getItem("username");
        } else {
            $scope.user = null;
        }
    };

    $scope.updateAuth();

    $scope.isActive = function (viewLocation) {
        $scope.location = $location.path();

        if ($scope.location.indexOf("/post/plist") === 0) {
            $scope.location = "/post/plist";
        }

        return viewLocation === $scope.location;
    };
}]);
