<template functional>
  <!-- VHMN-3948 temporary nuxt-link override -->
  <div
    :id="props.anchorId"
    class="VHModule"
    :class="{ [`VHModule--${props.size}`]: props.size, 'VHModule--anchor': props.anchorId, [data.staticClass]: data.staticClass }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VhModule',
  /**
   *  One of these size: small, medium, large
   */
  props: {
    anchorId: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: 'medium',
    },
  },
};
</script>

<style scoped>
.VHModule {
  /* BLOCK */
}

.VHModule:first-child {
  margin-top: 0;
}

.VHModule--small {
  margin-top: var(--module--mobile-margin-small);
  margin-bottom: var(--module--mobile-margin-small);
}
.VHModule--medium {
  margin-top: var(--module--mobile-margin-medium);
  margin-bottom: var(--module--mobile-margin-medium);
}
.VHModule--large {
  margin-top: var(--module--mobile-margin-large);
  margin-bottom: var(--module--mobile-margin-large);
}

/* VHMN-3948 temporary nuxt-link override */
.VHModule--small.VHModule--anchor {
  padding-top: calc(var(--space--medium) + var(--Header--mobile-height));
  margin-top: calc(var(--module--mobile-margin-small) * -1);
}

.VHModule--medium.VHModule--anchor {
  padding-top: calc(var(--space--medium) + var(--Header--mobile-height));
  margin-top: calc(var(--module--mobile-margin-medium) * -1);
}

.VHModule--large.VHModule--anchor {
  padding-top: calc(var(--space--medium) + var(--Header--mobile-height));
  margin-top: calc(var(--module--mobile-margin-large) * -1);
}

@media (--viewport--medium-up) {
  .VHModule--small {
    margin-top: var(--module--desktop-margin-small);
    margin-bottom: var(--module--desktop-margin-small);
  }
  .VHModule--medium {
    margin-top: var(--module--desktop-margin-medium);
    margin-bottom: var(--module--desktop-margin-medium);
  }
  .VHModule--large {
    margin-top: var(--module--desktop-margin-large);
    margin-bottom: var(--module--desktop-margin-large);
  }
}
</style>
