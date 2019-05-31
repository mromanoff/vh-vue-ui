<template>
  <div
    class="VhRating"
    :class="computedClasses"
  >
    <div
      v-for="i in 5"
      :key="i"
      class="VhRating-iconContainer"
      @click="handleIconClick(i)"
      @mouseenter="handleIconHoverEnter(i)"
      @mouseleave="handleIconHoverLeave"
    >
      <vh-icon
        :key="i"
        v-bind="individualIconProps(i)"
        :size="size"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VhRating',
  props: {
    /**
     * Rating component supports the same colors any icon supports
     */
    color: {
      type: String,
      default: 'orange',
    },
    /**
     * Rating provides visual feedback when hovering over icons
     */
    hover: {
      type: Boolean,
      default: false,
    },
    /**
     * Rating component will have half increments
     */
    halfIncrements: {
      type: Boolean,
      default: false,
    },
    /**
     * Rating component will display either stars or cirles
     */
    icon: {
      type: String,
      default: 'star',
      validator: value => {
        return value.match(/(star|circle)/);
      },
    },
    /**
     * Rating will be read only with no events
     */
    readonly: {
      type: Boolean,
      default: false,
    },
    /**
     * Rating takes either xSmall, small, medium, or large size
     */
    size: {
      type: String,
      default: 'medium',
      validator: value => {
        return value.match(/(xSmall|small|medium|large)/);
      },
    },
    /**
     * Rating takes a value from 1 to 5
     */
    value: {
      type: [Number, String],
      default: 0,
      validator: value => {
        return value <= 5;
      },
    },
  },
  data() {
    return {
      hoverIndex: -1,
      internalValue: Number(this.value),
    };
  },
  computed: {
    computedClasses() {
      return {
        'VhRating--readonly': this.readonly,
      };
    },
    isHovering() {
      return this.hover && this.hoverIndex >= 0;
    },
  },
  watch: {
    internalValue(val) {
      if (val !== Number(this.value)) {
        /**
         * input event passes a number representing the rating the user selected
         *
         * @event input
         * @type {Number}
         */
        this.$emit('input', val);
      }
    },
    value(val) {
      this.internalValue = val;
    },
  },
  methods: {
    individualIconProps(i) {
      const PROPS_BANK = {
        circle: {
          empty: { name: 'circle', color: 'grey' },
          half: { name: 'circle', color: this.color },
          full: { name: 'circle', color: this.color },
        },
        star: {
          empty: { name: 'starOutline', color: this.color },
          half: { name: 'starHalf', color: this.color },
          full: { name: 'star', color: this.color },
        },
      };

      if (this.isHovering) {
        const full = Math.floor(this.hoverIndex) >= i;
        return full ? PROPS_BANK[this.icon].full : PROPS_BANK[this.icon].empty;
      }

      if (i <= Math.floor(this.internalValue)) {
        return PROPS_BANK[this.icon].full;
      }

      if (i >= Math.floor(this.internalValue)) {
        if (this.internalValue % 1 > 0.5 && Math.ceil(this.internalValue) === i) {
          return this.halfIncrements ? PROPS_BANK[this.icon].half : PROPS_BANK[this.icon].empty;
        } else {
          return PROPS_BANK[this.icon].empty;
        }
      }
    },
    handleIconClick(i) {
      if (!this.readonly) this.internalValue = i;
    },
    handleIconHoverEnter(i) {
      this.hoverIndex = i;
    },
    handleIconHoverLeave(i) {
      this.hoverIndex = -1;
    },
  },
};
</script>

<style scoped>
/* BLOCK */
.VhRating {
  display: flex;
}

/* ELEMENTS */

.VhRating-iconContainer {
  cursor: pointer;
}

/* MODIFIERS */

.VhRating--readonly {
  pointer-events: none;
}
</style>
