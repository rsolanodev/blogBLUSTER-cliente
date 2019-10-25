myApp.controller('NavbarController', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        $scope.location = $location.path();
        
        if ($scope.location.indexOf("/post/plist") === 0) {
            $scope.location = "/post/plist";
        }

        return viewLocation === $scope.location;
    };
});