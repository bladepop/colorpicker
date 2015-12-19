var app = angular.module('example', ['tb-color-picker']);

app.controller('MainCtrl', function($scope) {
    $scope.options = ['transparent','#FF8A80', '#FFD180', '#FFFF8D', '#CFD8DC', '#80D8FF', '#A7FFEB', '#CCFF90'];
    $scope.color = '#FF8A80';

    $scope.colorChanged = function(newColor, oldColor) {
        console.log('from ', oldColor, ' to ', newColor);
    }
});
