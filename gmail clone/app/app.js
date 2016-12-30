'use strict';

var app = angular.module("gmail",['ngRoute']);
  app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when("/",{
      templateUrl: "messages/messages.html",
      controller: "msgCtrl"
    })
    .when("/:category/:id",{
      templateUrl: "email/email.html",
      controller: "detailsCtrl"
    })

    .otherwise({redirectTo:"/"});
}]);

app.value('menuList',["Inbox","Starred" ,"Important" ,  "Sent Mail", "Drafts" ,"Circles"]);
