<template>
  <div class="VHBadgeContainer">
    <span>
      <slot />
    </span>
    <span
      :class="computedClasses"
      class="VHBadge"
    >
      <slot name="badge" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'VHBadge',
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
        'VHBadge--white': this.color === 'white',
        'VHBadge--blue': this.color === 'blue',
        'VHBadge--orange': this.color === 'orange',
      };
    },
  },
};
</script>

<style scoped>
.VHBadgeContainer {
  display: inline-block;
  position: relative;
}

.VHBadge {
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

.VHBadge--white {
  background-color: var(--color--white);
  color: var(--text-color);
}

.VHBadge--blue {
  background-color: var(--color--blue400);
  color: var(--color--white);
}

.VHBadge--orange {
  background-color: var(--color--orange500);
  color: var(--color--white);
}
</style>
