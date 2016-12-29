'use strict';


  app.controller('inboxCtrl',['$scope','$filter' ,'$routeParams','emailService',function($scope , $filter , $routeParams , emailService){

        emailService.getInbox().success(function (data) {
          $scope.email= $filter('filter')(data , {id: $routeParams.id},true)[0] ;
        });

  }]);
  app.controller('outboxCtrl',['$scope','$filter' ,'$routeParams','emailService',function($scope , $filter , $routeParams , emailService){

        $scope.email = $filter('filter')(emailService.getOutbox() , {id: $routeParams.id},true)[0]

  }]);
