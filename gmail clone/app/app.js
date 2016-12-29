'use strict';

var app = angular.module("gmail",['ngRoute']);
  app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when("/",{
      templateUrl: "messages/messages.html",
      controller: "msgCtrl"
    })
    .when("/Inbox/:id",{
      templateUrl: "email/email.html",
      controller: "inboxCtrl"
    })
    .when("/Drafts/:id",{
      templateUrl: "email/email.html",
      controller: "outboxCtrl"
    })
    .otherwise({redirectTo:"/"});
}]);

app.value('menuList',["Inbox","Starred" ,"Important" ,  "Sent Mail", "Drafts" ,"Circles"]);
