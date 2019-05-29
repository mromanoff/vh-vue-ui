<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="VHIcon"
    :class="computedClasses"
    role="presentation"
  >
    <use v-bind="{ 'xlink:href': `/icons-sprite.svg#${name}` }" />
  </svg>
</template>

<script>
export default {
  name: 'VhIcon',
  props: {
    /**
     *  One of these colors: lightGrey, grey, darkGrey, lightBlue, blue, darkBlue, lightRed, red, darkRed, lightOrange, orange, darkOrange, lightYellow, yellow, darkYellow, lightGreen, green, darkGreen, white
     */
    color: {
      type: String,
      default: 'default',
      validator: value => {
        return value.match(
          /(default|lightGrey|grey|darkGrey|lightBlue|blue|darkBlue|lightRed|red|darkRed|lightOrange|orange|darkOrange|lightYellow|yellow|darkYellow|lightGreen|green|darkGreen|white)/,
        );
      },
    },
    /**
     * valid icon name look at Vehicle History Icons Guide
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * One of these sizes: xSmall, small, medium, large, xLarge
     */
    size: {
      type: String,
      default: 'medium',
      validator: value => {
        return value.match(/(xSmall|small|medium|large|xLarge)/);
      },
    },
  },

  computed: {
    computedClasses() {
      return {
        [`VHIcon--${this.size}`]: this.size,
        [`VHIcon--${this.color}`]: this.color,
      };
    },
  },
};
</script>

<style scoped>
/* https://material.io/design/iconography/system-icons.html#system-icon-metrics */

.VHIcon {
  display: block;
  width: var(--VHIcon-size--medium);
  height: var(--VHIcon-size--medium);
  font-size: var(--VHIcon-size--medium);
  user-select: none;
  flex-shrink: 0;
}

/* icons sizes */

.VHIcon--xSmall {
  width: var(--VHIcon-size--xSmall);
  height: var(--VHIcon-size--xSmall);
}

.VHIcon--small {
  width: var(--VHIcon-size--small);
  height: var(--VHIcon-size--small);
}

.VHIcon--medium {
  width: var(--VHIcon-size--medium);
  height: var(--VHIcon-size--medium);
}

.VHIcon--large {
  width: var(--VHIcon-size--large);
  height: var(--VHIcon-size--large);
}

.VHIcon--xLarge {
  width: var(--VHIcon-size--xLarge);
  height: var(--VHIcon-size--xLarge);
}

/* COLORS */
.VHIcon--default {
  fill: currentColor;
}

.VHIcon--lightOrange {
  fill: var(--color--orange300);
}

.VHIcon--orange {
  fill: var(--color--orange500);
}

.VHIcon--darkOrange {
  fill: var(--color--orange700);
}

.VHIcon--lightGrey {
  fill: var(--color--grey300);
}

.VHIcon--grey {
  fill: var(--color--grey500);
}

.VHIcon--darkGrey {
  fill: var(--color--grey700);
}

.VHIcon--lightBlue {
  fill: var(--color--blue300);
}

.VHIcon--blue {
  fill: var(--color--blue500);
}

.VHIcon--darkBlue {
  fill: var(--color--blue700);
}

.VHIcon--lightRed {
  fill: var(--color--red300);
}

.VHIcon--red {
  fill: var(--color--red500);
}

.VHIcon--darkRed {
  fill: var(--color--red700);
}

.VHIcon--lightYellow {
  fill: var(--color--yellow300);
}

.VHIcon--yellow {
  fill: var(--color--yellow500);
}

.VHIcon--darkYellow {
  fill: var(--color--yellow700);
}

.VHIcon--lightGreen {
  fill: var(--color--green300);
}

.VHIcon--green {
  fill: var(--color--green500);
}

.VHIcon--darkGreen {
  fill: var(--color--green700);
}

.VHIcon--white {
  fill: var(--color--white);
}
</style>
