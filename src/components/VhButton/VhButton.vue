<template>
  <component
    :is="nuxt && href ? 'nuxt-link' : href ? 'a' : 'button'"
    class="VhButton"
    :class="{
      'VhButton--disabled': disabled,
      'VhButton--block': block,
      [`VhButton--${variation}`]: variation,
      [`VhButton--${size}`]: size,
    }"
    :to="nuxt && href"
    v-bind="attrs"
    v-on="$listeners"
  >
    <span class="VhButton-iconLeft">
      <slot name="icon-left" />
    </span>

    <span class="VhButton-label">
      <slot />
    </span>
  </component>
</template>

<script>
export default {
  name: 'VhButton',
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
     * Button will become either "small" "medium" "large"
     */
    size: {
      type: String,
      default: 'medium',
      validator: value => {
        return value.match(/(small|medium|large)/);
      },
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
    /**
     * Button will become become either "primary" or "secondary"
     */
    variation: {
      type: String,
      default: 'primary',
      validator: value => {
        return value.match(/(primary|secondary|link|text)/);
      },
    },
  },
  computed: {
    attrs() {
      const { nuxt, href } = this;
      const attrs = {};

      if (!nuxt && href) attrs.href = this.href;
      if (nuxt && href) attrs.type = this.type;

      return attrs;
    },
  },
};
</script>

<style scoped>
a.VhButton {
  display: inline-flex;
}

.VhButton {
  min-width: calc(var(--space--xLarge) * 1.5);
  display: flex;
  align-items: center;
  color: var(--VhButton-color);
  user-select: none;
  border: var(--VhButton-borderWidth) solid var(--VhButton-borderColor);
  text-decoration: none;
  border-radius: var(--VhButton-borderRadius);
  font-size: var(--font-size--small);
  font-weight: var(--font-weight--medium);
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  line-height: 1;
  -webkit-appearance: none;
  padding: 0 var(--space--medium);
}

.VhButton:focus {
  outline: 0;
}

/* ELEMENTS */

.VhButton-iconLeft {
  margin-right: var(--space--small);
}

.VhButton-iconLeft:empty {
  display: none;
}

.VhButton--disabled {
  pointer-events: none;
  opacity: var(--VhButton--disabled-opacity);
}

/*
   * Modifier: primary buttons
  */
.VhButton--primary {
  background-color: var(--VhButton--primary-backgroundColor);
  border: var(--VhButton--primary-borderWidth) solid var(--VhButton--primary-borderColor);
  color: var(--VhButton--primary-color) !important;
  transition: background-color 50ms ease-out 50ms, border 50ms ease-out 50ms;
}

.VhButton--primary:hover {
  border-color: var(--VhButton--primary-backgroundColor-hover);
  background-color: var(--VhButton--primary-backgroundColor-hover);
}

.VhButton--primary:focus,
.VhButton--primary:active {
  border-color: var(--VhButton--primary-backgroundColor-active);
  background-color: var(--VhButton--primary-backgroundColor-active);
}

.VhButton--disabled.VhButton--primary {
  pointer-events: none;
  color: var(--color--grey500) !important;
  opacity: 1;
}

/**
  * Modifier: secondary buttons
  */
.VhButton--secondary {
  background: var(--VhButton--secondary-backgroundColor);
  border: var(--VhButton--secondary-borderWidth) solid var(--VhButton--secondary-borderColor);
  color: var(--VhButton--secondary-color);
  transition: background-color 50ms ease-out 50ms, border 50ms ease-out 50ms;
}

.VhButton--secondary:hover {
  background-color: var(--color--blue100);
}

.VhButton--secondary:focus,
.VhButton--secondary:active {
  color: var(--color--grey700);
  background-color: var(--color--grey50);
  border-color: var(--color--grey600);
}

/**
  * Modifier: text buttons
  */
.VhButton--text {
  background: var(--VhButton--text-backgroundColor);
  border: var(--VhButton--text-borderWidth) solid var(--VhButton--text-borderColor);
  color: var(--VhButton--text-color);
  transition: background-color 50ms ease-out 50ms, border 50ms ease-out 50ms;
}

.VhButton--text:hover {
  background-color: var(--color--blue100);
}

.VhButton--text:focus,
.VhButton--text:active {
  color: var(--color--grey700);
}

/**
  * Modifier: link buttons
  */

.VhButton--link {
  display: inline-block;
  border: none;
  background: transparent;
  color: var(--link-color);
  font-size: inherit;
  text-transform: initial;
  min-width: initial;
  min-height: initial;
  padding: 0;
  margin: 0;

  & > svg {
    display: inline-block;
    fill: currentColor;
  }
}

.VhButton--link:hover {
  text-decoration: underline;
}

/**
  * Modifier: small buttons
  */
.VhButton--small {
  font-size: var(--font-size--xSmall);
  height: var(--space--large);
  padding: 0 var(--space--small);
}

/**
  * Modifier: medium buttons
  */
.VhButton--medium {
  height: var(--space--xLarge);
}

/**
  * Modifier: large buttons
  */
.VhButton--large {
  font-size: var(--font-size--medium);
  font-weight: var(--font-weight--bold);
  padding: 0 var(--space--large);
  height: calc(var(--space--xLarge) + var(--space--small));
}

.VhButton--block {
  width: 100%;
  max-width: 100%;
  justify-content: center;
}
</style>
