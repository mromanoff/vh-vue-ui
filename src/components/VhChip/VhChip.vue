<template>
  <button
    type="button"
    class="VhChip"
    :class="computedClasses"
    v-on="$listeners"
  >
    <span class="VhChip-iconLeft">
      <slot name="icon-left" />
    </span>

    <span class="VhChip-content">
      <slot />
    </span>

    <span
      v-if="dismissible"
      class="VhChip-iconRight"
    >
      <vh-icon
        name="closeCircle"
        size="small"
      />
    </span>
  </button>
</template>

<script>
export default {
  name: 'VhChip',
  props: {
    /**
     * Disabled Chip
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Chip will become either "small" or "medium"
     */
    size: {
      type: String,
      default: 'medium',
      validator: value => {
        return value.match(/(small|medium)/);
      },
    },
    /**
     * Dismissible Chip true, false
     */
    dismissible: {
      type: Boolean,
      default: false,
    },
    /**
     * Controls visibility  TODO: do we need this still????
     */
    // value: {
    //   type: Boolean,
    //   default: true,
    // },
  },
  // data() {
  //   return {
  //     isActive: this.value,
  //   };
  // },
  computed: {
    computedClasses() {
      return {
        'VhChip--disabled': this.disabled,
        'VhChip--hover': this.hasParentClickHandler,
        [`VhChip--${this.size}`]: this.size,
      };
    },
    hasParentClickHandler() {
      return Boolean(this.$listeners.click);
    },
  },
  methods: {
    handleInput() {
      this.$emit('input');
    },
  },
};
</script>

<style scoped>
/* BLOCK */

.VhChip {
  display: inline-flex;
  align-items: center;
  user-select: none;
  color: var(--color--grey700);
  background-color: var(--color--grey200);
  text-decoration: none;
  line-height: 1;
  font-weight: var(--font-weight--normal);
  outline: none;
  cursor: pointer;
  border-radius: var(--VhChip-borderRadius);
  transition: background-color 50ms ease-out 50ms, border 50ms ease-out 50ms;
  -webkit-appearance: none;
  vertical-align: middle;
  padding: 0 var(--space--medium);
}

.VhChip:hover {
  background-color: var(--color--grey400);
}

.VhChip:focus,
.VhChip:active {
  background-color: var(--color--blue100);
  color: var(--color--blue700);
}

.VhChip-iconLeft {
  /* Yeah pixel perfect */
  margin: 0 2px 0 -12px;
  border-radius: 50%;
  & svg {
    width: 22px;
    height: 22px;
  }
}

.VhChip-iconLeft:empty {
  display: none;
}

.VhChip--small .VhChip-iconLeft {
  /* Yeah pixel perfect */
  margin: 0 2px 0 -3px;
  & svg {
    width: 16px;
    height: 16px;
  }
}

.VhChip-iconRight {
  /* Yeah pixel perfect */
  margin: 0 -12px 0 2px;
  user-select: none;
  border-radius: 50%;
}

.VhChip-iconRight:empty {
  display: none;
}

.VhChip--small .VhChip-iconRight {
  /* Yeah pixel perfect */
  margin: 0 -3px 0 2px;
  & svg {
    width: 16px;
    height: 16px;
  }
}

.VhChip:focus .VhChip-iconRight,
.VhChip:active .VhChip-iconRight {
  fill: var(--color--blue700);
}

/* MODIFIERS */

.VhChip--hover {
  cursor: pointer;

  & .VhChip-content {
    cursor: pointer;
  }
}

.VhChip--disabled {
  opacity: var(--VhChip--disabled-opacity);
  pointer-events: none;
}

/**
* Modifier: small Chip
*/
.VhChip--medium {
  height: var(--space--xLarge);
  font-size: var(--font-size--medium);
}

/**
* Modifier: small Chip
*/
.VhChip--small {
  height: var(--space--large);
  font-size: var(--font-size--xSmall);
  padding: 0 var(--space--small);
}
</style>
