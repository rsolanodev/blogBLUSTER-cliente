myApp.controller('PostListController', ['$scope', '$location', 'promisesService', '$routeParams', '$window', '$location', 'auth', function ($scope, $location, promisesService, $routeParams, $window, $location, auth) {
    $scope.authStatus = auth.data.status;
    if ($scope.authStatus !== 200) {
        $location.path('/login');
    }

    $scope.search_query = "";
    $scope.any_results = false;

    $scope.actually_page = parseInt($routeParams.page);
    $scope.rpp = parseInt($routeParams.rpp);

    $scope.colOrder = $routeParams.colOrder;
    $scope.order = $routeParams.order;

    $scope.full_url = function() {
        let url = $location.absUrl();

        let find_id = url.indexOf("id");
        let find_titulo = url.indexOf("titulo");
        let find_cuerpo = url.indexOf("cuerpo");
        let find_etiquetas = url.indexOf("etiquetas");
        let find_fecha = url.indexOf("fecha");

        if (find_id !== -1) {
            max_cut_string = find_id;
        } else if(find_titulo !== -1) {
            max_cut_string = find_titulo;
        } else if(find_cuerpo !== -1) {
            max_cut_string = find_cuerpo;
        } else if(find_etiquetas !== -1) {
            max_cut_string = find_etiquetas;
        } else if(find_fecha !== -1) {
            max_cut_string = find_fecha;
        } else {
            return url;
        }

        return url.substring(0, max_cut_string - 1);
    };

    $scope.get_order = function() {
        if($scope.order === "desc") {
            return "asc"
        } else {
            return "desc"
        }
    };

    $scope.buildURL = function() {
        if ($scope.colOrder !== undefined && $scope.order !== undefined) {
            return `/${$scope.colOrder}/${$scope.order}`;
        } else {
            return '';
        }
    };


    promisesService.getPage($scope.rpp, $scope.actually_page, $scope.colOrder, $scope.order).then(function (data) {
        $scope.posts = data.data.message;
    });

    promisesService.getCount().then(function (data) {
        $scope.num_posts = data.data.message;
        $scope.pages = promisesService.pagination($scope.num_posts, $scope.rpp, $scope.actually_page, 2);

        if ($scope.pages.indexOf($scope.actually_page) === -1) {
            $window.location.href = `./post/plist/${$scope.rpp}/1`;
        } else {
            $scope.is_ready = true
        }
    });

    $scope.search = function($event) {
        if($event.which === 13) {
            promisesService.getPage($scope.rpp, $scope.actually_page, $scope.colOrder, $scope.order, $event.target.value).then(function (data) {
                if(data.data.message.length > 0) {
                    $scope.posts = data.data.message;
                    $scope.any_results = false;
                } else {
                    $scope.any_results = true;
                }
            });
        }
    };

    $scope.page_name = "plist"
}]);
