/**
 * @ngdoc module
 * @name material.components.customform
 * @description
 * Form
 */
angular.module('material.components.customform', [])
  .directive('materialCustomInputGroup', [
    materialCustomInputGroupDirective
  ])
  .directive('materialCustomInput', [
    materialCustomInputDirective
  ]);

/**
 * @ngdoc directive
 * @name materialCustomInputGroup
 * @module material.components.customform
 * @restrict E
 * @description
 * Use the `<material-custom-input-group>` directive as the grouping parent of an `<material-custom-input>` elements
 *
 * @usage 
 * <hljs lang="html">
 * <material-custom-input-group>
 *   <material-custom-input type="text" ng-model="myText" size="200">
 * </material-custom-input-group>
 * </hljs>
 */
function materialCustomInputGroupDirective() {
  return {
    restrict: 'CE',
    controller: ['$element', function($element) {
      this.setFocused = function(isFocused) {
        $element.toggleClass('material-input-focused', !!isFocused);
      };
      this.setHasValue = function(hasValue) {
        $element.toggleClass('material-input-has-value', !!hasValue);
      };
    }]
  };
}

/**
 * @ngdoc directive
 * @name materialCustomInput
 * @module material.components.customform
 *
 * @restrict E
 *
 * @description
 * Use the `<material-custom-input>` directive as elements within a `<material-custom-input-group>` container
 *
 * @usage
 * <hljs lang="html">
 * <material-custom-input-group>
 *   <material-custom-input type="text" ng-model="user.fullName">
 *   <material-custom-input type="text" ng-model="user.email">
 * </material-custom-input-group>
 * </hljs>
 */
function materialCustomInputDirective() {
  return {
    restrict: 'E',
    replace: true,
    template: '<input>',
    require: ['^?materialCustomInputGroup', '?ngModel'],
    link: function(scope, element, attr, ctrls) {
      var inputGroupCtrl = ctrls[0];
      var ngModelCtrl = ctrls[1];
      if (!inputGroupCtrl) {
        return;
      }

      // When the input value changes, check if it "has" a value, and 
      // set the appropriate class on the input group
      if (ngModelCtrl) {
        //Add a $formatter so we don't use up the render function
        ngModelCtrl.$formatters.push(function(value) {
          inputGroupCtrl.setHasValue(!!value);
          return value;
        });
      }
      element.on('input', function() {
        inputGroupCtrl.setHasValue(!!element.val());
      });

      // When the input focuses, add the focused class to the group
      element.on('focus', function(e) {
        inputGroupCtrl.setFocused(true);
      });
      // When the input blurs, remove the focused class from the group
      element.on('blur', function(e) {
        inputGroupCtrl.setFocused(false);
      });

      scope.$on('$destroy', function() {
        inputGroupCtrl.setFocused(false);
        inputGroupCtrl.setHasValue(false);
      });
    }
  };
}
