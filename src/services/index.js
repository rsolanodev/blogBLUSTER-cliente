myApp.factory('promisesService', ['$http', function ($http) {
    return {
        getCount: function () {
            return $http.get("http://localhost:8081/blogbuster/json?ob=post&op=getcount")
        },
        getPage: function (ppe, np, colOrder, order, query_search) {
            let url = "";
            if (colOrder == null && order == null) {
                url = `http://localhost:8081/blogbuster/json?ob=post&op=getpage&page=${np}&rpp=${ppe}`
            } else {
                url = `http://localhost:8081/blogbuster/json?ob=post&op=getpage&page=${np}&rpp=${ppe}&order=${colOrder},${order}`
            }
            if (query_search != undefined || query_search != null) {
                url += `&q=${query_search}`;
            }
            return $http.get(url);
        },
        getPost: function (id) {
            return $http.get(`http://localhost:8081/blogbuster/json?ob=post&op=get&id=${id}`);
        },
        removePost: function (id) {
            return $http.get(`http://localhost:8081/blogbuster/json?ob=post&op=remove&id=${id}`);
        },
        updatePost: function (jsonToSend) {
            $http.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
            return $http.get('http://localhost:8081/blogbuster/json?ob=post&op=update', {
                params: jsonToSend
            });
        },
        newPost: function (jsonToSend) {
            $http.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
            return $http.get('http://localhost:8081/blogbuster/json?ob=post&op=insert', {
                params: jsonToSend
            });
        },
        pagination: function (num_posts, ppe, actually_page, range) {
            let num_pages = Math.ceil(num_posts / ppe);
            let pages = [];
            range++;

            for (let i = 1; i <= num_pages; i++) {
                if (i === 1) {
                    pages.push(i);
                } else if (i > (actually_page - range) && i < (actually_page + range)) {
                    pages.push(i);
                } else if (i === num_pages) {
                    pages.push(i);
                } else if (i === (actually_page - range) || i === (actually_page + range)) {
                    pages.push('...');
                }
            }

            return pages;
        },
        login: function (username, password) {
            return $http.get(`http://localhost:8081/blogbuster/json?ob=usuario&op=login&username=${username}&password=${forge_sha256(password)}`);
        },
        logout: function () {
            return $http.get('http://localhost:8081/blogbuster/json?ob=usuario&op=logout');
        },
        checkAuth: function () {
            return $http.get('http://localhost:8081/blogbuster/json?ob=usuario&op=check');
        }
    }
}]);
