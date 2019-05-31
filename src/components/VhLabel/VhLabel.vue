<template>
  <div
    class="VhLabel"
    :class="{
      [`VhLabel--${color}`]: color,
      [`VhLabel--${size}`]: size,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VhLabel',
  props: {
    /**
     *  One of these colors: grey, green, blue, black
     */
    color: {
      type: String,
      default: 'grey',
      validator: value => {
        return value.match(/(grey|green|blue|black)/);
      },
    },
  },
};
</script>

<style scoped>
.VhLabel {
  font-size: var(--font-size--xSmall);
  line-height: 1;
  height: var(--space--large);
  align-items: center;
  border-radius: 3px;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  color: var(--text-color);
  padding: 0 var(--space--small);
  text-transform: uppercase;
  font-weight: var(--font-weight--medium);
}

/* Label colors */
.VhLabel--grey {
  color: var(--color--grey700);
  background-color: var(--color--grey200);
}

.VhLabel--green {
  color: var(--color--white);
  background-color: var(--color--green700);
}

.VhLabel--blue {
  color: var(--color--blue700);
  background-color: var(--color--blue100);
}

.VhLabel--black {
  color: var(--color--white);
  background-color: var(--color--black);
}
</style>
