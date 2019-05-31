<template>
  <no-ssr>
    <v-popover
      class="VhTooltip"
      :trigger="mode"
    >
      <vh-icon
        name="helpCircleOutline"
        color="grey"
        size="small"
      />
      <div slot="popover">
        <slot />
      </div>
    </v-popover>
  </no-ssr>
</template>

<script>
export default {
  name: 'VhTooltip',
  computed: {
    hasChildren() {
      return Boolean(this.$slots.default);
    },
    mode() {
      if (this.hasChildren) {
        return 'click';
      } else {
        return 'manual';
      }
    },
  },
};
</script>

<style>
.VhTooltip {
  display: inline-block;
}

.tooltip {
  display: block !important;
  z-index: var(--z-index--medium);
}

.tooltip .tooltip-inner {
  font-size: var(--font-size--xSmall) !important;
  background-color: var(--color--grey100) !important;
  border: 1px solid var(--color--grey100) !important;
  border-radius: 3px !important;
  padding: 5px 5px 4px !important;
  color: var(--color--grey600) !important;
  box-shadow: 2px 2px 3px hsla(0, 0%, 63%, 0.4);
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: var(--color--grey100);
  z-index: 1;
}

.tooltip[x-placement^='top'] {
  margin-bottom: 5px;
}

.tooltip[x-placement^='top'] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^='bottom'] {
  margin-top: 5px;
}

.tooltip[x-placement^='bottom'] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^='right'] {
  margin-left: 5px;
}

.tooltip[x-placement^='right'] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^='left'] {
  margin-right: 5px;
}

.tooltip[x-placement^='left'] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, 0.1);
  max-width: 300px;
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}
</style>
