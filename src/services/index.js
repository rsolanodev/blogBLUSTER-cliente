myApp.factory('myService', ['$http', '$q', function ($http, $q) {
    return {
        plist: function(ppe, np) {
            let get_page = $http.get(`http://localhost:8084/blogbuster/json?ob=post&op=getpage&page=${np}&rpp=${ppe}`);
            let get_count = $http.get("http://localhost:8084/blogbuster/json?ob=post&op=getcount");

            return $q.all([get_page, get_count]).then(function (response) {
                return {
                    posts: response[0].data,
                    num_posts: response[1].data
                };
            });
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
