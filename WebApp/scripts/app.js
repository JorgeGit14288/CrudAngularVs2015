var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', { templateUrl: 'inicio.html', controller: 'IndexCtrl' })
    .when('/vista1', { templateUrl: 'vista1', controller: 'Vista1Ctrl' })
    .when('/vista2', { templateUrl: 'vista2', controller: 'Vista2Ctrl' })
    .otherwise({ redirectTo: '/' });

});

app.controller('IndexCtrl', ['$scope', function ($scope) {
    $scope.texto = "Esto es el inicio";
    $scope.suma = 2 + 2;
}]);

app.controller('Vista1Ctrl', ['$scope', function ($scope) {
    $scope.texto = "Esto es la vista 1";
    $scope.suma = 1 + 2;
}]);

app.controller('Vista2Ctrl', ['$scope', function ($scope) {
    $scope.texto = "Esto es la vista 2";
    $scope.suma = 2 + 6;
}]);