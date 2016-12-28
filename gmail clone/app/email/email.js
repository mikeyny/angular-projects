'use strict';

angular.module("gmail.email-details",[])
  .controller('emailCtrl',['$scope','$filter' ,'$routeParams','emailService',function($scope , $filter , $routeParams , emailService){
        emailService.getEmails().success(function (data) {
          $scope.email= $filter('filter')(data , {id: $routeParams.id},true)[0] ;


        });
  }]);
