/* CORS */
myApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}]);


/* Delete Prefix from URL */
myApp.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
}]);

/* DateLocaleProvider for date picker*/
myApp.config(function ($mdDateLocaleProvider) {
    $mdDateLocaleProvider.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    $mdDateLocaleProvider.shortMonths = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    $mdDateLocaleProvider.days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
    $mdDateLocaleProvider.shortDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'];
    $mdDateLocaleProvider.firstDayOfWeek = 1;

    $mdDateLocaleProvider.weekNumberFormatter = function (weekNumber) {
        return 'Semana ' + weekNumber;
    };
    $mdDateLocaleProvider.msgCalendar = 'Calendario';
    $mdDateLocaleProvider.msgOpenCalendar = 'Abrir calendario';
    $mdDateLocaleProvider.formatDate = function (date) {
        return moment(date).format('DD-MM-YYYY');
    };
  })