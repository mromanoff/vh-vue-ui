<template>
  <component
    :is="as"
    class="VhList"
    :class="computedClasses"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'VhList',
  props: {
    as: {
      type: String,
      default: 'div',
      validator: value => {
        return value.match(/(div|ul|ol|a)/);
      },
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedClasses() {
      return {
        'VhList--horizontal': this.horizontal,
      };
    },
  },
};
</script>

<style scoped>
/* BLOCK */

.VhList {
  display: flex;
  flex-direction: column;

  & >>> .VhListItem:not(:last-child) {
    margin-bottom: var(--space--medium);
  }
}

/* MODIFIERS */

.VhList--horizontal {
  flex-direction: row;

  & >>> .VhListItem:not(:last-child) {
    margin-bottom: 0;
    margin-right: var(--space--medium);
  }
}
</style>
