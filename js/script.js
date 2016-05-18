var app = angular.module('myApp', []);

app.service('itemsService',function($http,$q){
	var deferred = $q.defer();
	$http.get('recipes.json').then(function(data){
		deferred.resolve(data);
	});
	this.getItem = function(){
		return deferred.promise;
	}
})
app.controller('myCtrl', function($scope, itemsService){
	var promise = itemsService.getItem();
	promise.then(function(data){
		$scope.items = data.data;
		console.log($scope.items)
	})
})

