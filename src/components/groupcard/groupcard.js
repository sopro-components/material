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
 *  </material-groupcard>
 * </hljs>
 *
 */
function materialGroupcardDirective() {
  return {
    restrict: 'E',
    controller: function ($scope, $element) {
      $scope.overflowToggle = function (group) {
        $scope.group.overflow = !$scope.group.overflow;
      };
    },
    template:
      '<div>' + 
        '<h3>{{group.name}}</h3>' +
        '<div class="lightDetails">' +
          '{{group.groupType}}' +
          '<div class="groupCount">' +
            '<img ng-src="material-icons/icons/system_icons/social/res/1x_web/ic_group_18dp.png">' +
            '{{group.members.length}}' +
          '</div>' +
          '<div class="clearBoth"></div>' +
        '</div>' +
        '<div class="groupCardMenuBar">' +
          '<material-button class="material-button-icon overflowMenuButton" ng-click="overflowToggle()">' +
            '<img class="overflowMenuIcon" ng-src="material-icons/icons/system_icons/action/res/1x_web/ic_drawer_wht_18dp.png">' +
          '</material-button>' +
        '</div>' +
      '</div>'
  };
}
