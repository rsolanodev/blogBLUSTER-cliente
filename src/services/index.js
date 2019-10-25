myApp.factory('myService', ['$http', '$q', function ($http, $q) {
    return {
        getCount: function () {
            return $http.get("http://localhost:8081/blogbuster/json?ob=post&op=getcount")
        },
        getPage: function (ppe, np) {
            return $http.get(`http://localhost:8081/blogbuster/json?ob=post&op=getpage&page=${np}&rpp=${ppe}`);
        },
        getPost: function (id) {
            return $http.get(`http://localhost:8081/blogbuster/json?ob=post&op=get&id=${id}`);
        },
        removePost: function (id) {
            return $http.get(`http://localhost:8081/blogbuster/json?ob=post&op=remove&id=${id}`);
        },
        updatePost: function (response) {
            return $http({
                url: 'http://localhost:8081/blogbuster/json?ob=post&op=update',
                method: "POST",
                data: {
                    data: response
                }
            });
        },
        pagination: function (num_posts, ppe, actually_page, range) {
            let num_pages = Math.ceil(num_posts / ppe);
            let pages = [];
            range++;

            for (let i = 1; i <= num_pages; i++) {
                if (i == 1) {
                    pages.push(i);
                } else if (i > (actually_page - range) && i < (actually_page + range)) {
                    pages.push(i);
                } else if (i == num_pages) {
                    pages.push(i);
                } else if (i == (actually_page - range) || i == (actually_page + range)) {
                    pages.push('...');
                }
            }

            return pages;
        },
    }
}]);