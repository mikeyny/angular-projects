
    app.factory('emailService',['$http', function($http){
      var emailApi ={};

      var outbox = [{
        "id":"102",
        "from":"mikey",
        "body":"Hello from the other side",
          "time": "1405"
      }] ;

      emailApi.sendMail = function(msg){
        outbox.push(msg);
      };

      emailApi.getOutbox = function(){
        return outbox;
      };

      emailApi.getInbox = function(){
        return $http.get("json/messages.json");

      };

      return emailApi ;
    }]);
