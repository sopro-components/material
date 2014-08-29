
angular.module('app', ['ngMaterial'])

.controller('AppCtrl', function($scope) {
  var groups = [
    { name: "Devs",
      groupType: "Broadcast List",
      members: [{name: "Plato"}, {name: "Dan"}, {name: "Cesar"}, {name: "Voodoo"}] }, 
    { name: "Sprouts",
      groupType: "Broadcast List",
      members: [{name: "Alice"}, {name: "Bob"}] },
    { name: "Friends",
      groupType: "Broadcast List",
      members: [{name: "Raf"}, {name: "Hiro"}] }
  ];

  $scope.myGroups = groups;
});