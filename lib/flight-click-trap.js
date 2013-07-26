define(function () {

  'use strict';

  /**
   * Module exports
   */

  return withClickTrap;

  /**
   * Module function
   */

  function withClickTrap() {

    var clickTrapEnabled = false;

    this.enableClickTrap = function() {
      if (!clickTrapEnabled) {

        // Catch clicks on the body, only outside the node.
        $('body').on('click.clicktrap', '*', function(e) {
          e.stopPropagation();
          if (!this.targetWithinComponent(e.target)) {
            this.trigger('componentLostClick');
          }
        }.bind(this));

        // Catch clicks inside the node.
        this.$node.on('click.clicktrap', '*', function(e) {
          e.stopPropagation();
          this.trigger('componentReceivedClick');
        }.bind(this));

        clickTrapEnabled = true;
      }
    };

    this.disableClickTrap = function() {
      if (clickTrapEnabled) {
        $('body').off('click.clicktrap');
        this.$node.off('click.clicktrap');
        clickTrapEnabled = false;
      }
    }

    this.targetWithinComponent = function(target) {
      return ($(target).closest(this.$node).length > 0);
    };

  }
});
