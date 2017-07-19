// Creación del módulo
var angularRoutingApp = angular.module('WebApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl	: 'home.html',
			controller 	: 'mainController'
		})
		.when('/acerca', {
			templateUrl : 'pages/acerca.html',
			controller 	: 'aboutController'
		})
		.when('/contacto', {
			templateUrl : 'pages/contacto.html',
			controller 	: 'contactController'
		})
        .when('/personas', {
        	templateUrl: 'views/list.html',
        	controller: 'personasController'
        })
		.otherwise({
			redirectTo: '/'
		});
});


angularRoutingApp.controller('mainController', function ($scope) {
    $scope.message = 'Esta es la pagina inicial, Bienvenido!';
});

angularRoutingApp.controller('personasController', function($scope, $http) {
    $scope.message = 'Estoy en personas controller, y vista index';
    $scope.Listar = function () {
        $http({
            method: "get",
            url: "http://localhost:57983/api/Personas"
             }).then(function (response) {
            $scope.personas = response.data;
        }, function (response) {
            alert("Ah ocurrido un error " +response.response);
        })
    };
});

angularRoutingApp.controller('aboutController', function($scope) {
	$scope.message = 'Esta es la página "Acerca de"';
});

angularRoutingApp.controller('contactController', function($scope) {
	$scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
});