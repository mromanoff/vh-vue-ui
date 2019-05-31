<template>
  <button
    :disabled="disabled"
    class="VhHeroButton"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'VhHeroButton',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.VhHeroButton {
  display: block;
  height: var(--VhHeroButton-height);
  padding: 0 var(--space--xLarge);
  user-select: none;
  text-decoration: none;
  text-transform: uppercase;
  line-height: 1;
  font-size: var(--font-size--medium);
  white-space: nowrap;
  border-radius: calc(var(--VhHeroButton-height) / 2);
  border: var(--VhHeroButton-borderWidth) solid var(--VhHeroButton-borderColor);
  background-color: var(--VhHeroButton-backgroundColor);
  outline: none;
  cursor: pointer;
  color: var(--VhHeroButton-color);
  transition: background-color 100ms ease-out 100ms;
  text-align: center;
}

.VhHeroButton:focus {
  outline: 0;
}

.VhHeroButton:hover,
.VhHeroButton:focus,
.VhHeroButton:active {
  background-color: var(--VhHeroButton-backgroundColor--hover);
}

.VhHeroButton[disabled] {
  opacity: 0.75;
  cursor: not-allowed;
}
</style>
