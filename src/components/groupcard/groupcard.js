/**
 * @ngdoc module
 * @name material.components.groupcard
 *
 * @description
 * Group card components.
 */
angular.module('material.components.groupcard', [
])
  .directive('materialGroupcard', [
    materialGroupcardDirective 
  ]);

/**
 * @ngdoc directive
 * @name materialGroupcard
 * @module material.components.groupcard
 *
 * @restrict E
 *
 * @description
 * The `<material-groupcard>` directive is a container element used within `<material-content>` containers.
 *
 * @usage
 * <hljs lang="html">
 *  <material-groupcard>
 *    <img src="/img/washedout.png" class="material-card-image">
 *    <h2>Paracosm</h2>
 *    <p>
 *      The titles of Washed Out's breakthrough song and the first single from Paracosm share the
 *      two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...
 *    </p>
 *  </material-groupcard>
 * </hljs>
 *
 */
function materialGroupcardDirective() {
  return {
    restrict: 'E',
    controller: function ($scope, $element) {
      $scope.toggleCard = function () {
        $scope.group.isActive = !$scope.group.isActive;
        $element.addClass('active');
        $scope.avatar = "/img/list/60.jpeg"
      };
    },
    template:
      '<div class="groupcardHotspot" ng-click="toggleCard()">' + 
        '<h2>{{group.name}}</h2>' +
        '<div class="animate-show" ng-show="group.isActive">' +
          '<material-list>' +
            '<material-item ng-repeat="peer in group.peers">' +
              '<div class="material-tile-left">' +
                '<img ng-src={{avatar}} class="face">' +
              '</div>' +
              '<div class="material-tile-content">' +
                '<h2>{{peer.name}}</h2>' +
              '</div>' +
            '</material-item>' +
          '</material-list>' +
        '</div>' +
      '</div>'
  };
}
