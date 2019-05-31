<template>
  <!-- VhMN-3948 temporary nuxt-link override -->
  <div
    :id="this.anchorId"
    class="VhModule"
    :class="{ [`VhModule--${this.size}`]: this.size, 'VhModule--anchor': this.anchorId }"
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
.VhModule {
  /* BLOCK */
}

.VhModule:first-child {
  margin-top: 0;
}

.VhModule--small {
  margin-top: var(--VhModule--mobile-margin-small);
  margin-bottom: var(--VhModule--mobile-margin-small);
}

.VhModule--medium {
  margin-top: var(--VhModule--mobile-margin-medium);
  margin-bottom: var(--VhModule--mobile-margin-medium);
}

.VhModule--large {
  margin-top: var(--VhModule--mobile-margin-large);
  margin-bottom: var(--VhModule--mobile-margin-large);
}

/* VhMN-3948 temporary nuxt-link override */
.VhModule--small.VhModule--anchor {
  padding-top: calc(var(--space--medium) + var(--Header--mobile-height));
  margin-top: calc(var(--VhModule--mobile-margin-small) * -1);
}

.VhModule--medium.VhModule--anchor {
  padding-top: calc(var(--space--medium) + var(--Header--mobile-height));
  margin-top: calc(var(--VhModule--mobile-margin-medium) * -1);
}

.VhModule--large.VhModule--anchor {
  padding-top: calc(var(--space--medium) + var(--Header--mobile-height));
  margin-top: calc(var(--VhModule--mobile-margin-large) * -1);
}

@media (--viewport--medium-up) {
  .VhModule--small {
    margin-top: var(--VhModule--desktop-margin-small);
    margin-bottom: var(--VhModule--desktop-margin-small);
  }

  .VhModule--medium {
    margin-top: var(--VhModule--desktop-margin-medium);
    margin-bottom: var(--VhModule--desktop-margin-medium);
  }

  .VhModule--large {
    margin-top: var(--VhModule--desktop-margin-large);
    margin-bottom: var(--VhModule--desktop-margin-large);
  }
}
</style>
