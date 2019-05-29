<template>
  <component
    :is="nuxt && href ? 'nuxt-link' : href ? 'a' : 'button'"
    class="VHButton"
    :class="{
      'VHButton--disabled': disabled,
      'VHButton--block': block,
      [`VHButton--${variation}`]: variation,
      [`VHButton--${size}`]: size,
    }"
    :to="nuxt && href"
    v-bind="attrs"
    v-on="$listeners"
  >
    <span class="VHButton-iconLeft">
      <slot name="icon-left" />
    </span>

    <span class="VHButton-label">
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
a.VHButton {
  display: inline-flex;
}

.VHButton {
  min-width: calc(var(--space--xLarge) * 1.5);
  display: flex;
  align-items: center;
  color: var(--VHButton-color);
  user-select: none;
  border: var(--VHButton-borderWidth) solid var(--VHButton-borderColor);
  text-decoration: none;
  border-radius: var(--VHButton-borderRadius);
  font-size: var(--font-size--small);
  font-weight: var(--font-weight--medium);
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  line-height: 1;
  -webkit-appearance: none;
  padding: 0 var(--space--medium);
}

.VHButton:focus {
  outline: 0;
}

/* ELEMENTS */

.VHButton-iconLeft {
  margin-right: var(--space--small);
}

.VHButton-iconLeft:empty {
  display: none;
}

.VHButton--disabled {
  pointer-events: none;
  opacity: var(--VHButton--disabled-opacity);
}

/*
   * Modifier: primary buttons
  */
.VHButton--primary {
  background-color: var(--VHButton--primary-backgroundColor);
  border: var(--VHButton--primary-borderWidth) solid var(--VHButton--primary-borderColor);
  color: var(--VHButton--primary-color) !important;
  transition: background-color 50ms ease-out 50ms, border 50ms ease-out 50ms;
}

.VHButton--primary:hover {
  border-color: var(--VHButton--primary-backgroundColor-hover);
  background-color: var(--VHButton--primary-backgroundColor-hover);
}

.VHButton--primary:focus,
.VHButton--primary:active {
  border-color: var(--VHButton--primary-backgroundColor-active);
  background-color: var(--VHButton--primary-backgroundColor-active);
}

.VHButton--disabled.VHButton--primary {
  pointer-events: none;
  color: var(--color--grey500) !important;
  opacity: 1;
}

/**
  * Modifier: secondary buttons
  */
.VHButton--secondary {
  background: var(--VHButton--secondary-backgroundColor);
  border: var(--VHButton--secondary-borderWidth) solid var(--VHButton--secondary-borderColor);
  color: var(--VHButton--secondary-color);
  transition: background-color 50ms ease-out 50ms, border 50ms ease-out 50ms;
}

.VHButton--secondary:hover {
  background-color: var(--color--blue100);
}

.VHButton--secondary:focus,
.VHButton--secondary:active {
  color: var(--color--grey700);
  background-color: var(--color--grey50);
  border-color: var(--color--grey600);
}

/**
  * Modifier: text buttons
  */
.VHButton--text {
  background: var(--VHButton--text-backgroundColor);
  border: var(--VHButton--text-borderWidth) solid var(--VHButton--text-borderColor);
  color: var(--VHButton--text-color);
  transition: background-color 50ms ease-out 50ms, border 50ms ease-out 50ms;
}

.VHButton--text:hover {
  background-color: var(--color--blue100);
}

.VHButton--text:focus,
.VHButton--text:active {
  color: var(--color--grey700);
}

/**
  * Modifier: link buttons
  */

.VHButton--link {
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

.VHButton--link:hover {
  text-decoration: underline;
}

/**
  * Modifier: small buttons
  */
.VHButton--small {
  font-size: var(--font-size--xSmall);
  height: var(--space--large);
  padding: 0 var(--space--small);
}

/**
  * Modifier: medium buttons
  */
.VHButton--medium {
  height: var(--space--xLarge);
}

/**
  * Modifier: large buttons
  */
.VHButton--large {
  font-size: var(--font-size--medium);
  font-weight: var(--font-weight--bold);
  padding: 0 var(--space--large);
  height: calc(var(--space--xLarge) + var(--space--small));
}

.VHButton--block {
  width: 100%;
  max-width: 100%;
  justify-content: center;
}
</style>
