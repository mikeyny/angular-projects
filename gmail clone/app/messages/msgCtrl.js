'use strict';


  app.controller('msgCtrl',['$scope','emailService','menuList','$rootScope' ,function($scope , emailService,menuList ,$rootScope){

    $scope.mail = emailService.getMail();
  
  }]);
