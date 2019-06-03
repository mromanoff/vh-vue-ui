<template>
  <component
    :is="component"
    class="Group"
    :class="computedClasses"
    :style="computedStyles"
  >
    <slot />
  </component>
</template>

<script>
const itemsPerRowValidator = value => value > 0 && value <= 4;

export default {
  name: 'VhGroup',
  props: {
    as: {
      type: String,
      default: 'div',
      validator: value => {
        return value.match(/(div|nav)/);
      },
    },
    /**
     * Group will align items within parent container, each column will be overridden only be max-content width
     */
    alignItems: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(start|center|end)/);
      },
    },
    /**
     * Group will have x items per row
     */
    itemsPerRow: {
      type: [Number, String],
      default: null,
      validator: itemsPerRowValidator,
    },
    /**
     * Group will have x items per row at mobile breakpoint
     */
    itemsPerRowMobile: {
      type: [Number, String],
      default: null,
      validator: itemsPerRowValidator,
    },

    /**
     * Group will have x items per row at tablet breakpoint
     */
    itemsPerRowTablet: {
      type: [Number, String],
      default: null,
      validator: itemsPerRowValidator,
    },

    /**
     * Group will have x items per row at desktop breakpoint
     */
    itemsPerRowDesktop: {
      type: [Number, String],
      default: null,
      validator: itemsPerRowValidator,
    },
    /**
     * Group will have x rem spacing between items
     */
    spaceBetweenItems: {
      type: [Number, String],
      default: 0,
    },
  },
  computed: {
    component() {
      return this.as === 'div' || this.as === 'nav' ? this.as : 'div';
    },
    strictItemsPerRow() {
      return Number(this.itemsPerRow) >= 5 ? 4 : Number(this.itemsPerRow);
    },
    computedClasses() {
      return {
        [`Group-columnsMobile${this.itemsPerRowMobile}--maxContent`]: this.alignItems && this.itemsPerRowMobile,
        [`Group-columnsTablet${this.itemsPerRowTablet}--maxContent`]: this.alignItems && this.itemsPerRowTablet,
        [`Group-columnsDesktop${this.itemsPerRowDesktop}--maxContent`]: this.alignItems && this.itemsPerRowDesktop,
        [`Group-columnsMobile${this.itemsPerRowMobile}--fraction`]: !this.alignItems && this.itemsPerRowMobile,
        [`Group-columnsTablet${this.itemsPerRowTablet}--fraction`]: !this.alignItems && this.itemsPerRowTablet,
        [`Group-columnsDesktop${this.itemsPerRowDesktop}--fraction`]: !this.alignItems && this.itemsPerRowDesktop,
      };
    },
    computedStyles() {
      return {
        'grid-template-columns': !this.itemsPerRow
          ? ''
          : this.alignItems
          ? `repeat(${this.strictItemsPerRow}, max-content)`
          : `repeat(${this.strictItemsPerRow}, 1fr)`,
        'justify-content': this.alignItems,
        'grid-gap': `${Number(this.spaceBetweenItems)}rem`,
        'justify-items': this.center ? 'center' : 'stretch',
      };
    },
  },
};
</script>

<style scoped>
.Group {
  display: grid;
}

@media (min-width:0) and (max-width:767px) {
  .Group-columnsMobile1--maxContent {
    grid-template-columns: repeat(1, max-content) !important;
  }

  .Group-columnsMobile2--maxContent {
    grid-template-columns: repeat(2, max-content) !important;
  }

  .Group-columnsMobile3--maxContent {
    grid-template-columns: repeat(3, max-content) !important;
  }

  .Group-columnsMobile4--maxContent {
    grid-template-columns: repeat(4, max-content) !important;
  }

  .Group-columnsMobile1--fraction {
    grid-template-columns: repeat(1, 1fr) !important;
  }

  .Group-columnsMobile2--fraction {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  .Group-columnsMobile3--fraction {
    grid-template-columns: repeat(3, 1fr) !important;
  }

  .Group-columnsMobile4--fraction {
    grid-template-columns: repeat(4, 1fr) !important;
  }
}

@media (min-width:768px) {
  .Group-columnsTablet1--maxContent {
    grid-template-columns: repeat(1, max-content) !important;
  }
  .Group-columnsTablet2--maxContent {
    grid-template-columns: repeat(2, max-content) !important;
  }

  .Group-columnsTablet3--maxContent {
    grid-template-columns: repeat(3, max-content) !important;
  }

  .Group-columnsTablet4--maxContent {
    grid-template-columns: repeat(4, max-content) !important;
  }

  .Group-columnsTablet1--fraction {
    grid-template-columns: repeat(1, 1fr) !important;
  }

  .Group-columnsTablet2--fraction {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  .Group-columnsTablet3--fraction {
    grid-template-columns: repeat(3, 1fr) !important;
  }

  .Group-columnsTablet4--fraction {
    grid-template-columns: repeat(4, 1fr) !important;
  }
}

@media (min-width:1200px) {
  .Group-columnsDesktop1--maxContent {
    grid-template-columns: repeat(1, max-content) !important;
  }
  .Group-columnsDesktop2--maxContent {
    grid-template-columns: repeat(2, max-content) !important;
  }

  .Group-columnsDesktop3--maxContent {
    grid-template-columns: repeat(3, max-content) !important;
  }
  .Group-columnsDesktop4--maxContent {
    grid-template-columns: repeat(4, max-content) !important;
  }

  .Group-columnsDesktop1--fraction {
    grid-template-columns: repeat(1, 1fr) !important;
  }

  .Group-columnsDesktop2--fraction {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  .Group-columnsDesktop3--fraction {
    grid-template-columns: repeat(3, 1fr) !important;
  }

  .Group-columnsDesktop4--fraction {
    grid-template-columns: repeat(4, 1fr) !important;
  }
}
</style>
