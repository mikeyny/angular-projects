'use strict';


  app.controller('formCtrl',['$scope','emailService','menuList','$rootScope', function($scope , emailService,menuList ,$rootScope){


    $scope.id = 200;
    $scope.startAdd = function() {
        var emailId = $scope.id++ ;
      $scope.newEmail =   {
          "id":emailId.toString(),
          "category":"Sent Mail",
          "from":{
            "name":"mikeyny",
            "email":"nyamandemike43@gmail.com"
                  },
          "to":{
            "name":"Unknown",
            "email":""
            },
          "read": true,
          "subject":"",
          "body":"",
          "time": ""
        };
      $scope.adding = true;
      };
      $scope.menuList = menuList ;

      $scope.addItem = function() {
        $scope.adding = false;
        var newEmail = angular.copy($scope.newEmail);
        newEmail.time = new Date().getTime();
        emailService.sendMail(newEmail);
      };

      $scope.cancelAdd = function() {
        $scope.adding = false;
      };
      $rootScope.category ="Inbox";
    $scope.openBox = function(item){
      $rootScope.category = item.item ;
      console.log($rootScope.category);
    };

  }]);
