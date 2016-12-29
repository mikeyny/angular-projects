'use strict';
  app.directive('linkTo', ['$location', function ($location ) {
  return{
    restrict: 'A',
    link: function (scope, element, attr) {
      element.attr('style', 'cursor:pointer');
      element.on('click', function(){
        $location.path(attr.linkTo)
        scope.$apply();
      });
    }
  }
}]);
