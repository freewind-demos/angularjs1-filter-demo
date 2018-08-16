const app = angular.module('app', []);
app.filter('wave', function () {
    return function (data) {
        if (data) {
            return '~~~ ' + data + ' ~~~';
        } else {
            data
        }
    }
});