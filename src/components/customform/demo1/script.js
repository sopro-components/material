
angular.module('app', ['ngMaterial'])

.controller('AppCtrl', function($scope) {
  $scope.data = {};
})

.directive('ig', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      fid: '@'
    },
    template: 
      '<material-custom-input-group>' +
        '<label for="{{fid}}">Description</label>' +
        '<material-custom-input id="{{fid}}" type="text" size="50" ng-model="data.description">' +
      '</material-input-group>'
  };
});
