'use strict';

angular.module("gmail.message",[])
  .controller('msgCtrl',['$scope', function($scope){
    $scope.messages = [
      {from: "Michael Nyamande",
       body: " This is a sample message",
        time: "14:03"},
       {from: "Ellena Wilscon",
        body: " This is a another sample message",
          time:"23:01"},
        {from: "Dave Wilmar",
         body: " TOK, i Think thats enough",
          time:"10:04"},

    ];
    $scope.menuList =["Inbox","Starred" ,"Important" ,  "Sent Mail", "Drafts" ,"Circles"];
  }]);
