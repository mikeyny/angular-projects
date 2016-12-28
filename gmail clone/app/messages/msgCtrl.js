'use strict';

angular.module("gmail.message",[])
  .controller('msgCtrl',['$scope','emailService', function($scope , emailService){
    emailService.getEmails().success(function(data){
      $scope.messages = data ;
    });
    $scope.menuList =["Inbox","Starred" ,"Important" ,  "Sent Mail", "Drafts" ,"Circles"];
  }]);
