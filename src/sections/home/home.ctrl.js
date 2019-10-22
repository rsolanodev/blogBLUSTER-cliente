myApp.controller('HomeController', ['$scope', '$http', 'myService', function ($scope, $http, myService) {

    $scope.data = {
        'id': 5,
        'unit': 5
    };

    $scope.units = [
        {'id': 5, 'label': '5'},
        {'id': 10, 'label': '10'},
        {'id': 25, 'label': '25'},
        {'id': 50, 'label': '50'},
    ];

    $scope.actually_page = 1;

    myService.plist($scope.data.unit, 1).then(function (data) {
        $scope.posts = data.posts.response;
        $scope.num_posts = data.num_posts.response;
    }).then(function () {
        $scope.pages = myService.pagination($scope.num_posts, $scope.data.unit);
    });

    $scope.ppeChanged = function() {
        myService.plist($scope.data.unit, 1).then(function (data) {
            $scope.posts = data.posts.response;
            $scope.num_posts = data.num_posts.response;
        });

        $scope.pages = myService.pagination($scope.num_posts, $scope.data.unit);
    };


    $scope.getPage = function(np) {
        myService.plist($scope.data.unit, np).then(function(data) {
            $scope.posts = data.posts.response;
            $scope.num_posts = data.num_posts.response;
        });

        $scope.actually_page = np;
    }





}]);
