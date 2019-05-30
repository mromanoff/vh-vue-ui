<template>
  <form
    :id="id"
    class="Form"
    :class="computedClasses"
    v-on="$listeners"
  >
    <slot />
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {
    /**
     *  Form variant. if you want to hide this. use labelHidden = true
     */
    variant: {
      type: String,
      default: 'normal',
      validator: value => {
        return value.match(/(spaced|normal)/);
      },
    },
  },

  data() {
    return {
      id: this.$uuid.v4(),
    };
  },

  computed: {
    computedClasses() {
      return {
        [`Form--${this.variant}`]: this.variant,
      };
    },
  },
};
</script>

<style scoped>
.Form--spaced {
  margin-top: 0;

  & .Form-field {
    margin-bottom: 1.5rem;
  }
}
</style>
