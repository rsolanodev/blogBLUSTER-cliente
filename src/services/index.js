myApp.factory('myService', ['$http', '$q', function ($http, $q) {
    return {
        getCount: function () {
            return $http.get("http://localhost:8081/blogbuster/json?ob=post&op=getcount")
        },
        getPage: function (ppe, np) {
            return $http.get(`http://localhost:8081/blogbuster/json?ob=post&op=getpage&page=${np}&rpp=${ppe}`);
        },
        getPost: function(id) {
            return $http.get(`http://localhost:8081/blogbuster/json?ob=post&op=get&id=${id}`);
        },
        pagination: function (num_posts, ppe, paginaActual) {
            let pages = [];

            let numPaginas = Math.ceil(num_posts / ppe);

            for (let i = 1; i <= numPaginas; i++) {
                if (i === 1) {
                    pages.push(i);
                }

                if (i === paginaActual && i - 2 > 1) {
                    pages.push(i - 2);
                }

                if (i === paginaActual && i - 1 > 1) {
                    pages.push(i - 1);
                }

                if (i === paginaActual && i !== 1) {
                    pages.push(i);
                }

                if (i === paginaActual && i + 1 < numPaginas) {
                    pages.push(i + 1);
                }

                if (i === paginaActual && i + 2 < numPaginas) {
                    pages.push(i + 2);
                }

                if (i === numPaginas && i !== 1 && i !== paginaActual) {
                    pages.push(i);
                }
            }

            return pages;
        }
    }
}]);
