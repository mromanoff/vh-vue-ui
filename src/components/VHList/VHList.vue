<template>
  <component
    :is="as"
    class="VHList"
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
        'VHList--horizontal': this.horizontal,
      };
    },
  },
};
</script>

<style scoped>
/* BLOCK */

.VHList {
  display: flex;
  flex-direction: column;

  & >>> .VHListItem:not(:last-child) {
    margin-bottom: var(--space--medium);
  }
}

/* MODIFIERS */

.VHList--horizontal {
  flex-direction: row;

  & >>> .VHListItem:not(:last-child) {
    margin-bottom: 0;
    margin-right: var(--space--medium);
  }
}
</style>
