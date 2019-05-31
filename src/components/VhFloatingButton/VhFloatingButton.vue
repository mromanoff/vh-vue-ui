<template>
  <button
    class="VhFloatingButton"
    :class="{
      [`VhFloatingButton--${size}`]: size,
    }"
    type="button"
    :to="nuxt && href"
    v-bind="attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'VhFloatingButton',
  props: {
    /**
     * Button will become either "small" or "medium"
     */
    size: {
      type: String,
      default: 'medium',
      validator: value => {
        return value.match(/(small|medium)/);
      },
    },
  },
};
</script>

<style scoped>
.VhFloatingButton {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--VhFloatingButton-color);
  background: var(--VhFloatingButton-backgroundColor);
  border-radius: var(--VhFloatingButton-borderRadius);
  user-select: none;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  line-height: 0;
  -webkit-appearance: button;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  transition: background-color 100ms ease-out 100ms;
  will-change: box-shadow;
  min-width: 0;
  padding: 0;
}

.VhFloatingButton:focus {
  outline: 0;
}

.VhFloatingButton:hover {
  background-color: var(--VhFloatingButton-backgroundColor-hover);
}

.VhFloatingButton:focus,
.VhFloatingButton:active {
  background-color: var(--VhFloatingButton-backgroundColor-active);
}

.VhFloatingButton--small {
  width: 24px;
  height: 24px;
}

.VhFloatingButton--medium {
  width: 48px;
  height: 48px;
}
</style>
