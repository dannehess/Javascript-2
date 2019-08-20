       // Skapa en AngularJS-modul
       let app = angular.module("app", []);

       // Skapa en cotroller
       app.controller("personCtrl", function($scope){
           $scope.firstName = "Daniel";
           $scope.lastName = "Hessling";
           $scope.fullName = function(){
            return $scope.firstName + ' ' + $.lastName;
           };
       });