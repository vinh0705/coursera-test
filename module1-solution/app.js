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
      var comma = ',';
      var splitString = $scope.name.split(comma);
      if(splitString.length <= 3)
        $scope.result = "Enjoy!";
      else
        $scope.result = "Too Much";
    }
    else {
      $scope.result = "Please enter data first";
    }
  };
}

})();
