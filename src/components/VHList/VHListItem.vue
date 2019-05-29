<template>
  <component
    :is="as"
    class="VHListItem"
    v-on="$listeners"
  >
    <div class="VHListItem-icon">
      <vh-icon
        v-if="icon"
        :name="icon"
      />
    </div>
    <slot />
    <div class="VHListItem-rightContent">
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
.VHListItem {
  display: flex;
  align-items: center;
}

.VHListItem-icon {
  margin-right: var(--space--small);
}

.VHListItem-rightContent {
  margin-left: auto;
}

.VHListItem-icon:empty,
.VHListItem-rightContent:empty {
  display: none;
}
</style>
