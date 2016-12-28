'use strict';

angular.module("gmail",['ngRoute','gmail.message','gmail.email-details','gmail.directives','gmail.email-service'])
  .config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when("/",{
      templateUrl: "messages/messages.html",
      controller: "msgCtrl"
    })
    .when("/email/:id",{
      templateUrl: "email/email.html",
      controller: "emailCtrl"
    })
    .when("/compose",{
      templateUrl: "catalog/catalog.html",
      controller: "genreCtrl"
    })
    .otherwise({redirectTo:"/"});
}]);
