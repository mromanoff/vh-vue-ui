<template>
  <component
    :is="as"
    class="VhListItem"
    v-on="$listeners"
  >
    <div class="VhListItem-icon">
      <vh-icon
        v-if="icon"
        :name="icon"
      />
    </div>
    <slot />
    <div class="VhListItem-rightContent">
      <slot name="right-content" />
    </div>
  </component>
</template>

<script>
export default {
  name: 'VhListItem',
  props: {
    as: {
      type: String,
      default: 'div',
      validator: value => {
        return value.match(/(div|li|nav)/);
      },
    },
    icon: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
.VhListItem {
  display: flex;
  align-items: center;
}

.VhListItem-icon {
  margin-right: var(--space--small);
}

.VhListItem-rightContent {
  margin-left: auto;
}

.VhListItem-icon:empty,
.VhListItem-rightContent:empty {
  display: none;
}
</style>
