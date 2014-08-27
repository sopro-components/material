
angular.module('app', ['ngMaterial'])

.controller('AppCtrl', function($scope) {
  var groups = [
    { name: "Devs",
      peers: [{name: "Plato"}, {name: "Dan"}, {name: "Cesar"}, {name: "Voodoo"}] }, 
    { name: "Sprouts",
      peers: [{name: "Alice"}, {name: "Bob"}] },
    { name: "Friends",
      peers: [{name: "Raf"}, {name: "Hiro"}] }
  ];

  $scope.myGroups = groups;
});