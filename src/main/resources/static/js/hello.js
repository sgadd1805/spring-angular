angular.module("hello", [])
.controller('home', function($scope, $http){
	$http.get("/resource").success(function(response){
		$scope.greeting = response;
	})
})