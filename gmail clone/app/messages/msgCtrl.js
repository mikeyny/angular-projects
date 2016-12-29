'use strict';


  app.controller('msgCtrl',['$scope','emailService','menuList','$rootScope' ,function($scope , emailService,menuList ,$rootScope){

    emailService.getInbox().success(function (data) {
      $scope.inbox= data ;


    });

    $scope.outbox = emailService.getOutbox() ;

    $scope.category = function(){
      console.log($scope.inbox);
      return ($rootScope.cat=='Inbox') ? $scope.inbox : $scope.outbox ;
    };



  }]);
