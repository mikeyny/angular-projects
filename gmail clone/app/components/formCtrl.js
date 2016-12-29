'use strict';


  app.controller('formCtrl',['$scope','emailService','menuList','$rootScope', function($scope , emailService,menuList ,$rootScope){


    $scope.id = 200;
    $scope.startAdd = function() {
        var emailId = $scope.id++ ;
      $scope.newEmail = { "id": emailId.toString(), "from": '', "body": '' ,"time":''};
      $scope.adding = true;
      };
      $scope.menuList = menuList ;

      $scope.addItem = function() {
        $scope.adding = false;
        var newEmail = angular.copy($scope.newEmail);
        emailService.sendMail(newEmail);
      };

      $scope.cancelAdd = function() {
        $scope.adding = false;
      };
      $rootScope.cat ="Inbox";
    $scope.openBox = function(item){
      $rootScope.cat = item.item ;
      console.log($rootScope.cat);
    };

  }]);
