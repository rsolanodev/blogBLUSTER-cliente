myApp.filter('capitalize', function() {
    return function(input) {
        return (angular.isString(input) && input.length > 0) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : input;
    }
});

myApp.filter('stringToDate', function () {
    return function (input) {
        if (!input)
            return null;

        var date = moment(input,"DD/MM/YYYY HH:mm");
        return date.isValid() ? date.toDate() : null;
    };
});

myApp.filter('clipString', function ($filter) {
    return function (input) {
        if (input == null) {
            return "";
        }
        if (input.length > 200) {
            return input.substr(0, 185).trim() + "...";

        } else {
            return input;
        }
    };
})

myApp.filter('toHTML', function ($filter) {
    return function (input) {
        
    };
})