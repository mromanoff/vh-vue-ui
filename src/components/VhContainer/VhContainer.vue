<template>
  <div
    class="VhContainer"
    :class="{ 'VhContainer--isTop': this.isTop }"
  >
    <div class="VhContainer-main">
      <slot name="main" />
    </div>
    <aside class="VhContainer-aside u-sm-hidden u-md-hidden">
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

<style>
.VhContainer {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space--medium);
  padding-right: var(--space--medium);

  @media (min-width:768px) and (max-width:1199px) {
    flex-direction: row;
    width: var(--breakpoint--large);
    max-width: 100%;
  }
}

.VhContainer-main {
  flex: 1 1 100%;
  width: 100%;
}

.VhContainer-aside >>> .Ad:first-child {
  margin-top: 0;
}

.VhContainer-aside:empty {
  display: none;
}

.VhContainer-main + .VhContainer-aside {
  max-width: var(--aside--width);
  flex: 0 0 var(--aside--width);
  margin-bottom: var(--space--large);
}

.VhContainer--isTop {
  margin-top: var(--space--xLarge);
}

@media (min-width:768px)  {
  .VhContainer-main {
    overflow: hidden;
    margin-bottom: 0;
    display: block;
  }
}

@media (min-width:768px) and (max-width:1199px) {
  /*.VhContainer {*/
  /*  flex-direction: row;*/
  /*  width: var(--breakpoint--large);*/
  /*  max-width: 100%;*/
  /*}*/
  .VhContainer-main + .VhContainer-aside {
    margin-left: calc(var(--space--medium) * 2);
    margin-bottom: 0;
  }
}
</style>
