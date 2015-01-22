var angularDemo = angular.module('angularDemo', []);

angularDemo.controller('controller', function controller($scope, $http) {
    $http.get('/lib/angular/js/data.json').success(function(data) {
        $scope.artists = data;
    });
    
    
    
    
});
