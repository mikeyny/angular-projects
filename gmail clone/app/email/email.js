'use strict';



  app.controller('detailsCtrl',['$scope','$filter' ,'$routeParams','emailService','$rootScope' ,function($scope , $filter , $routeParams , emailService , $rootScope){

        $scope.email = $filter('filter')(emailService.getMail() , {id: $routeParams.id},true)[0];
        $scope.show = ($rootScope.category == "Inbox") ? true : false;
        console.log($scope.show);
  }]);
