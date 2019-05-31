<template>
  <component
    :is="nuxt && href ? 'nuxt-link' : href ? 'a' : 'button'"
    class="VhNavigationButton"
    :class="{
      'VhNavigationButton--block': block,
      'VhNavigationButton--disabled': disabled,
      'VhNavigationButton--current': current,
      'VhNavigationButton--static': isStatic,
    }"
    :href="!nuxt && href ? href : null"
    :to="nuxt && href"
    :type="nuxt && href ? type : null"
    v-on="$listeners"
  >
    <span class="VhNavigationButton-iconLeft">
      <slot name="icon-left" />
    </span>

    <span class="VhNavigationButton-label">
      <slot />
    </span>

    <span
      v-if="!isStatic && !current"
      class="VhNavigationButton-iconRight"
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
.VhNavigationButton {
  --VhNavigationButton-borderColor: var(--color--grey300);
  --VhNavigationButton-borderWidth: 1px;
  --VhNavigationButton-borderRadius: 0;
  --VhNavigationButton-color: var(--color--blue700);
  --VhNavigationButton--disabled-opacity: 0.4;

  display: flex;
  align-items: center;
  user-select: none;
  height: 3.75rem;
  min-width: 15rem;
  border: var(--VhNavigationButton-borderWidth) solid var(--VhNavigationButton-borderColor);
  color: var(--VhNavigationButton-color);
  text-decoration: none;
  text-transform: none;
  border-radius: var(--VhNavigationButton-borderRadius);
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
.VhNavigationButton:hover {
  background-color: var(--color--grey100);
  border-color: var(--color--grey300);
}
.VhNavigationButton:focus,
.VhNavigationButton:active {
  background-color: var(--color--grey200);
  border-color: var(--color--grey300);
}

/* MODIFIERS */
.VhNavigationButton--disabled {
  pointer-events: none;
  color: var(--text-color);
  opacity: var(--VhNavigationButton--disabled-opacity);
}

.VhNavigationButton--current {
  pointer-events: none;
  color: var(--text-color);
  background-color: var(--color--grey100);
  border-color: var(--color--grey300);
  font-weight: var(--font-weight--medium);
}

.VhNavigationButton--static {
  pointer-events: none;
  color: var(--text-color);
  background-color: var(--color--white);
  border-color: var(--color--grey300);
}

/* ELEMENTS */
.VhNavigationButton-label {
  flex: 1 1 auto;
  margin-right: auto;
  text-align: left;
}

.VhNavigationButton-iconLeft {
  margin-right: var(--space--medium);
}

.VhNavigationButton-iconLeft:empty {
  display: none;
}

.VhNavigationButton-iconRight {
  flex: 0 0 32px;
  margin-right: calc(var(--space--small) * -1);
}

.VhNavigationButton--block {
  width: 100%;
  max-width: 100%;
  justify-content: center;
}
</style>
