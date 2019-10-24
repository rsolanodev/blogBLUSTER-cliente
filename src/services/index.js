myApp.factory('myService', ['$http', '$q', function ($http, $q) {
    return {
        getCount: function() {
            return $http.get("http://localhost:8081/blogbuster/json?ob=post&op=getcount")
        },
        getPage: function(ppe, np) {
            return $http.get(`http://localhost:8081/blogbuster/json?ob=post&op=getpage&page=${np}&rpp=${ppe}`);
        },
        pagination: function(num_posts, ppe) {
            let pages = [];

            for(let i = 1; i <= Math.ceil(num_posts/ppe); i++) {
                pages.push(i);
            }

            return pages;
        }
    }
}]);
