(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

function LunchCheckController ($scope,
                       $filter,
                       $injector) {
  $scope.name = "Yaakov";
  $scope.result ="test";                    
  $scope.check = function () {
    $scope.result="clicked";
  };
}

})();
