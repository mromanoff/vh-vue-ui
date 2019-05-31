<template>
  <div class="VhBadgeContainer">
    <span>
      <slot />
    </span>
    <span
      :class="computedClasses"
      class="VhBadge"
    >
      <slot name="badge" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'VhBadge',
  props: {
    /**
     * Badge Color: white, blue, orange.
     */
    color: {
      type: String,
      default: 'blue',
    },
  },
  computed: {
    computedClasses() {
      return {
        'VhBadge--white': this.color === 'white',
        'VhBadge--blue': this.color === 'blue',
        'VhBadge--orange': this.color === 'orange',
      };
    },
  },
};
</script>

<style scoped>
.VhBadgeContainer {
  display: inline-block;
  position: relative;
}

.VhBadge {
  position: absolute;
  display: flex;
  top: 8px;
  right: 10px;
  height: 16px;
  min-width: 16px;
  padding: 0 2px;
  z-index: 1;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  border-radius: 10px;
  transform: scale(1) translate(90%, -60%);
  transform-origin: 100% 0%;
}

.VhBadge--white {
  background-color: var(--color--white);
  color: var(--text-color);
}

.VhBadge--blue {
  background-color: var(--color--blue400);
  color: var(--color--white);
}

.VhBadge--orange {
  background-color: var(--color--orange500);
  color: var(--color--white);
}
</style>
