angular.module('gmail.email-service',[])
    .factory('emailService',['$http', function($http){
      var emailApi ={};
      emailApi.getEmails = function(){
        return $http.get("json/messages.json");
      };
      return emailApi ;
    }]);
