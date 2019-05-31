<template>
  <div
    class="VhAvatar"
    :class="computedClasses"
    v-on="$listeners"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VhAvatar',
  props: {
    /**
     *  One of these colors: grey, yellow, orange, green, red, blue
     */
    color: {
      type: String,
      default: 'grey',
      validator: value => {
        return value.match(/(grey|green|yellow|orange|red|blue)/);
      },
    },
    /**
     * One of these sizes: small, medium, large
     */
    size: {
      type: String,
      default: 'medium',
      validator: value => {
        return value.match(/(small|medium|large)/);
      },
    },
  },
  computed: {
    computedClasses() {
      return {
        [`VhAvatar--${this.size}`]: this.size,
        [`VhAvatar--${this.color}`]: this.color,
      };
    },
  },
};
</script>

<style scoped>
.VhAvatar {
  align-items: center;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  position: relative;
  text-align: center;
  vertical-align: middle;
  background-color: var(--color--blue400);
  border-color: var(--color--blue400);
  color: var(--color--white);
  font-weight: var(--font-weight--light);
  flex: 0 0 auto;
}

/* Avatar sizes */
.VhAvatar--small {
  height: var(--VhAvatar-size--small);
  width: var(--VhAvatar-size--small);
  font-size: 12px !important;
}

.VhAvatar--medium {
  height: var(--VhAvatar-size--medium);
  width: var(--VhAvatar-size--medium);
  font-size: 16px !important;
}

.VhAvatar--large {
  height: var(--VhAvatar-size--large);
  width: var(--VhAvatar-size--large);
  font-size: 24px !important;
}

/* Avatar colors */
.VhAvatar--grey {
  background-color: var(--color--grey500);
}

.VhAvatar--yellow {
  background-color: var(--color--yellow500);
}
.VhAvatar--orange {
  background-color: var(--color--orange500);
}

.VhAvatar--green {
  background-color: var(--color--green500);
}

.VhAvatar--red {
  background-color: var(--color--red500);
}

.VhAvatar--blue {
  background-color: var(--color--blue500);
}
</style>
