
    app.factory('emailService',['$http', function($http){
      var emailApi ={};

      var mail = [];
      $http.get('json/messages.json').success(function(data){
          mail = data ;
        });
      emailApi.sendMail = function(msg){
        mail.push(msg);
      };

      emailApi.getMail = function(){
        return mail;
      };






      return emailApi ;
    }]);
