<template>
  <button
    :disabled="disabled"
    class="VHHeroButton"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'VHHeroButton',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.VHHeroButton {
  display: block;
  height: var(--VHHeroButton-height);
  padding: 0 var(--space--xLarge);
  user-select: none;
  text-decoration: none;
  text-transform: uppercase;
  line-height: 1;
  font-size: var(--font-size--medium);
  white-space: nowrap;
  border-radius: calc(var(--VHHeroButton-height) / 2);
  border: var(--VHHeroButton-borderWidth) solid var(--VHHeroButton-borderColor);
  background-color: var(--VHHeroButton-backgroundColor);
  outline: none;
  cursor: pointer;
  color: var(--VHHeroButton-color);
  transition: background-color 100ms ease-out 100ms;
  text-align: center;
}

.VHHeroButton:focus {
  outline: 0;
}

.VHHeroButton:hover,
.VHHeroButton:focus,
.VHHeroButton:active {
  background-color: var(--VHHeroButton-backgroundColor--hover);
}

.VHHeroButton[disabled] {
  opacity: 0.75;
  cursor: not-allowed;
}
</style>
