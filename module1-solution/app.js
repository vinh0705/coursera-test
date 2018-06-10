(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

function LunchCheckController ($scope,
                       $filter,
                       $injector) {
  //$scope.name = "Yaakov";
  //$scope.result =;                    
  $scope.check = function () {
    if($scope.name) {
      $scope.result = "Please enter data first";
    }
    else {
      $scope.result = "Something Entered";
    }
  };
}

})();
