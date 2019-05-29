<template>
  <component
    :is="nuxt && href ? 'nuxt-link' : href ? 'a' : 'button'"
    class="VHNavigationButton"
    :class="{
      'VHNavigationButton--block': block,
      'VHNavigationButton--disabled': disabled,
      'VHNavigationButton--current': current,
      'VHNavigationButton--static': isStatic,
    }"
    :href="!nuxt && href ? href : null"
    :to="nuxt && href"
    :type="nuxt && href ? type : null"
    v-on="$listeners"
  >
    <span class="VHNavigationButton-iconLeft">
      <slot name="icon-left" />
    </span>

    <span class="VHNavigationButton-label">
      <slot />
    </span>

    <span
      v-if="!isStatic && !current"
      class="VHNavigationButton-iconRight"
    >
      <vh-icon
        name="chevronRight"
        size="medium"
        color="darkGrey"
      />
    </span>
  </component>
</template>

<script>
export default {
  name: 'VhNavigationButton',
  props: {
    /**
     * Button will expand to 100% width of container
     */
    block: {
      type: Boolean,
      default: false,
    },
    /**
     * Button will be disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Button will be current, (current page)
     */
    current: {
      type: Boolean,
      default: false,
    },
    /**
     * Button will be static, (no action)
     */
    isStatic: {
      type: Boolean,
      default: false,
    },
    /**
     * Button will become a clickable hyperlink
     */
    href: {
      type: [String, Object],
      default: null,
    },
    /**
     * Button will become a nuxt-link using href as "to"
     */
    nuxt: {
      type: Boolean,
      default: false,
    },
    /**
     * Button will have type attribute of either "button", "submit", or "reset"
     */
    type: {
      type: String,
      default: 'button',
      validator: value => {
        return value.match(/(button|submit|reset)/);
      },
    },
  },
};
</script>

<style scoped>
.VHNavigationButton {
  --VHNavigationButton-borderColor: var(--color--grey300);
  --VHNavigationButton-borderWidth: 1px;
  --VHNavigationButton-borderRadius: 0;
  --VHNavigationButton-color: var(--color--blue700);
  --VHNavigationButton--disabled-opacity: 0.4;

  display: flex;
  align-items: center;
  user-select: none;
  height: 3.75rem;
  min-width: 15rem;
  border: var(--VHNavigationButton-borderWidth) solid var(--VHNavigationButton-borderColor);
  color: var(--VHNavigationButton-color);
  text-decoration: none;
  text-transform: none;
  border-radius: var(--VHNavigationButton-borderRadius);
  font-size: var(--font-size--medium);
  font-weight: var(--font-weight--normal);
  outline: none;
  cursor: pointer;
  line-height: 1;
  -webkit-appearance: none;
  padding: 0 var(--space--medium);
  background: transparent;
  transition: background-color 50ms ease-out 50ms, border 50ms ease-out 50ms;
}
.VHNavigationButton:hover {
  background-color: var(--color--grey100);
  border-color: var(--color--grey300);
}
.VHNavigationButton:focus,
.VHNavigationButton:active {
  background-color: var(--color--grey200);
  border-color: var(--color--grey300);
}

/* MODIFIERS */
.VHNavigationButton--disabled {
  pointer-events: none;
  color: var(--text-color);
  opacity: var(--VHNavigationButton--disabled-opacity);
}

.VHNavigationButton--current {
  pointer-events: none;
  color: var(--text-color);
  background-color: var(--color--grey100);
  border-color: var(--color--grey300);
  font-weight: var(--font-weight--medium);
}

.VHNavigationButton--static {
  pointer-events: none;
  color: var(--text-color);
  background-color: var(--color--white);
  border-color: var(--color--grey300);
}

/* ELEMENTS */
.VHNavigationButton-label {
  flex: 1 1 auto;
  margin-right: auto;
  text-align: left;
}

.VHNavigationButton-iconLeft {
  margin-right: var(--space--medium);
}

.VHNavigationButton-iconLeft:empty {
  display: none;
}

.VHNavigationButton-iconRight {
  flex: 0 0 32px;
  margin-right: calc(var(--space--small) * -1);
}

.VHNavigationButton--block {
  width: 100%;
  max-width: 100%;
  justify-content: center;
}
</style>
