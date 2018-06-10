(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

function LunchCheckController ($scope,
                       $filter,
                       $injector) {
  $scope.name = "Yaakov";
  $scope.result ="test";                    
  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

  console.log($injector.annotate(LunchCheckController));
}

function AnnonateMe(name, job, blah) {
  return "Blah!";
}

console.log(LunchCheckController.toString());

})();
