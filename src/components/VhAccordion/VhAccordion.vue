<template>
  <div class="VHAccordion">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VhAccordion',
  props: {
    expandMode: {
      type: String,
      default: 'single',
      validator: value => {
        return value.match(/(single|multiple)/);
      },
    },
  },
  mounted() {
    this.$children.forEach(child =>
      child.$on('accordion-item-select', id => {
        this.handleAccordionItemSelect(child, id);
      }),
    );
  },
  methods: {
    handleAccordionItemSelect(child, id) {
      switch (this.expandMode) {
        case 'single':
          this.$children.forEach(child => {
            if (child.id === id) {
              child.isOpen = !child.isOpen;
            } else if (child.id !== id && child.isOpen) {
              child.isOpen = false;
            }
          });
          break;
        case 'multiple':
          child.isOpen = !child.isOpen;
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
.VHAccordion {
  position: relative;
}
</style>
