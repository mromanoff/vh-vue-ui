<template>
  <div
    class="Avatar"
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
        [`Avatar--${this.size}`]: this.size,
        [`Avatar--${this.color}`]: this.color,
      };
    },
  },
};
</script>

<style scoped>
.Avatar {
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
.Avatar--small {
  height: var(--avatar-size--small);
  width: var(--avatar-size--small);
  font-size: 12px !important;
}

.Avatar--medium {
  height: var(--avatar-size--medium);
  width: var(--avatar-size--medium);
  font-size: 16px !important;
}

.Avatar--large {
  height: var(--avatar-size--large);
  width: var(--avatar-size--large);
  font-size: 24px !important;
}

/* Avatar colors */
.Avatar--grey {
  background-color: var(--color--grey500);
}

.Avatar--yellow {
  background-color: var(--color--yellow500);
}
.Avatar--orange {
  background-color: var(--color--orange500);
}

.Avatar--green {
  background-color: var(--color--green500);
}

.Avatar--red {
  background-color: var(--color--red500);
}

.Avatar--blue {
  background-color: var(--color--blue500);
}
</style>
