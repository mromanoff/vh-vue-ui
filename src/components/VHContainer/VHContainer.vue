<template functional>
  <div
    class="Container"
    :class="{ 'Container--isTop': props.isTop, [data.staticClass]: data.staticClass }"
  >
    <div class="Container-main">
      <slot name="main" />
    </div>
    <aside class="Container-aside u-sm-hidden u-md-hidden">
      <slot name="aside" />
    </aside>
  </div>
</template>

<script>
export default {
  props: {
    isTop: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.Container {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space--medium);
  padding-right: var(--space--medium);
}

.Container-main {
  flex: 1 1 100%;
  width: 100%;
}

.Container-aside >>> .Ad:first-child {
  margin-top: 0;
}

.Container-aside:empty {
  display: none;
}

.Container-main + .Container-aside {
  max-width: var(--aside--width);
  flex: 0 0 var(--aside--width);
  margin-bottom: var(--space--large);
}

.Container--isTop {
  margin-top: var(--space--xLarge);
}

@media (--viewport--medium) {
  .Container-main {
    overflow: hidden;
    margin-bottom: 0;
    display: block;
  }
}

@media (--viewport--medium-up) {
  .Container {
    flex-direction: row;
    width: var(--breakpoint--large);
    max-width: 100%;
  }
  .Container-main + .Container-aside {
    margin-left: calc(var(--space--medium) * 2);
    margin-bottom: 0;
  }
}
</style>
