<template>
  <div
    class="VhAccordionItem"
    :class="itemClasses"
  >
    <div
      class="VhAccordionItem-header"
      :class="stateClasses"
      @click="handleClick"
    >
      <vh-icon
        name="chevronDown"
        color="darkGrey"
        size="large"
      />
      <slot name="header" />
    </div>
    <div
      class="VhAccordionItem-body"
      :class="stateClasses"
    >
      <div v-if="!lazy || (lazy && hasBeenOpened)">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VhAccordionItem',
  props: {
    bordered: {
      type: Boolean,
      default: false,
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'small',
    },
  },
  data() {
    return {
      id: null,
      isOpen: this.open,
      hasBeenOpened: this.open,
    };
  },
  computed: {
    itemClasses() {
      return {
        'VhAccordionItem--bordered': this.bordered,
        [`VhAccordionItem--${this.size}`]: this.size,
      };
    },
    stateClasses() {
      return {
        'is-open': this.isOpen,
      };
    },
  },
  watch: {
    isOpen(newValue, oldValue) {
      if (this.hasBeenOpened === true) return null;
      else if (newValue === true && oldValue === false) {
        this.hasBeenOpened = true;
      }
    },
  },
  mounted() {
    this.id = this.$uuid.v4();
  },
  methods: {
    handleClick() {
      /**
       * @event accordion-item-select
       * @type {String}
       */
      this.$emit('accordion-item-select', this.id);
    },
  },
};
</script>

<style scoped>
.VhAccordionItem {
  /* BLOCK */
}

.VhAccordionItem-header {
  min-height: 3.75rem;
  cursor: pointer;
  display: flex;
  justify-items: center;
  align-items: center;
  z-index: var(--z-index--low);

  & h2,
  & h3 {
    flex: 1 0 auto;
    margin: 0;
    padding: var(--space--small) 0;
  }

  & h2 {
    padding: var(--space--medium) 0;
    border-bottom: 1px solid var(--color--grey300);
  }

  & .Icon {
    margin-left: var(--space--medium);
    margin-right: var(--space--medium);
    transition-property: all;
    transition-duration: 200ms;
  }
}

.VhAccordionItem-header.is-open {
  & .Icon {
    transform: rotate(180deg);
  }

  & h2,
  & h3 {
    border-bottom: 1px solid transparent;
  }
}

.VhAccordionItem-body {
  z-index: calc(var(--z-index--low) - 1);
  height: 1px;
  overflow: hidden;
  opacity: 0;
  transition-property: height, opacity;
  transition-duration: 200ms;
}

.VhAccordionItem-body.is-open {
  height: 100%;
  opacity: 1;
  overflow: visible;
  border-bottom: 1px solid var(--color--grey300);
  padding-bottom: var(--space--xLarge);
}

/* MODIFIERS */

.VhAccordionItem--small {
  & .VhAccordionItem-header {
    cursor: pointer;
    display: flex;
    justify-items: center;
    align-items: center;
    z-index: var(--z-index--low);

    & h2,
    & h3 {
      flex: 1 0 auto;
      margin: 0;
      padding: 0;
      line-height: 1;
      font-size: var(--font-size--medium);
      font-weight: normal;
      font-family: var(--font-family);
    }

    & .Icon {
      margin-left: var(--space--medium);
      margin-right: var(--space--medium);
      transition-property: all;
      transition-duration: 100ms;
    }
  }

  & .VhAccordionItem-body {
    margin-top: -2px;
  }

  & .VhAccordionItem-body.is-open {
    padding-top: var(--space--medium);
    border-bottom: none;
  }
}

.VhAccordionItem--bordered {
  & .VhAccordionItem-header {
    border: 1px solid var(--color--grey300);
  }
}
</style>
