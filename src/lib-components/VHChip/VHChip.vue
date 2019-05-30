<template>
  <button
    type="button"
    class="VHChip"
    :class="computedClasses"
    v-on="$listeners"
  >
    <span class="VHChip-iconLeft">
      <slot name="icon-left" />
    </span>

    <span class="VHChip-content">
      <slot />
    </span>

    <span
      v-if="dismissible"
      class="VHChip-iconRight"
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
        'VHChip--disabled': this.disabled,
        'VHChip--hover': this.hasParentClickHandler,
        [`VHChip--${this.size}`]: this.size,
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

.VHChip {
  --VHChip-borderRadius: 32px;
  --VHChip-color: var(--color--blue700);
  --VHChip--disabled-opacity: 0.4;

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
  border-radius: var(--VHChip-borderRadius);
  transition: background-color 50ms ease-out 50ms, border 50ms ease-out 50ms;
  -webkit-appearance: none;
  vertical-align: middle;
  padding: 0 var(--space--medium);
}

.VHChip:hover {
  background-color: var(--color--grey400);
}

.VHChip:focus,
.VHChip:active {
  background-color: var(--color--blue100);
  color: var(--color--blue700);
}

.VHChip-iconLeft {
  /* Yeah pixel perfect */
  margin: 0 2px 0 -12px;
  border-radius: 50%;
  & svg {
    width: 22px;
    height: 22px;
  }
}

.VHChip-iconLeft:empty {
  display: none;
}

.VHChip--small .VHChip-iconLeft {
  /* Yeah pixel perfect */
  margin: 0 2px 0 -3px;
  & svg {
    width: 16px;
    height: 16px;
  }
}

.VHChip-iconRight {
  /* Yeah pixel perfect */
  margin: 0 -12px 0 2px;
  user-select: none;
  border-radius: 50%;
}

.VHChip-iconRight:empty {
  display: none;
}

.VHChip--small .VHChip-iconRight {
  /* Yeah pixel perfect */
  margin: 0 -3px 0 2px;
  & svg {
    width: 16px;
    height: 16px;
  }
}

.VHChip:focus .VHChip-iconRight,
.VHChip:active .VHChip-iconRight {
  fill: var(--color--blue700);
}

/* MODIFIERS */

.VHChip--hover {
  cursor: pointer;

  & .VHChip-content {
    cursor: pointer;
  }
}

.VHChip--disabled {
  opacity: var(--VHChip--disabled-opacity);
  pointer-events: none;
}

/**
* Modifier: small Chip
*/
.VHChip--medium {
  height: var(--space--xLarge);
  font-size: var(--font-size--medium);
}

/**
* Modifier: small Chip
*/
.VHChip--small {
  height: var(--space--large);
  font-size: var(--font-size--xSmall);
  padding: 0 var(--space--small);
}
</style>
