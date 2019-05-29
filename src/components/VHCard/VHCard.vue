<template>
  <component
    :is="computedElement"
    class="Card"
    :class="computedClasses"
    :to="nuxt && href"
    v-bind="attrs"
    v-on="$listeners"
  >
    <!-- @slot Default slot can take content like images -->
    <div class="Card-default">
      <slot />
    </div>

    <div class="Card-header">
      <!-- @slot Card Header contains header, icons, etc. outside of content -->
      <slot name="card-header" />
    </div>
    <div class="Card-content">
      <div class="Card-title">
        <!-- @slot Card Title contains content title -->
        <slot name="card-title" />
      </div>
      <!-- @slot Card content contains content, text, etc. -->
      <slot name="card-content" />
    </div>

    <div class="Card-action">
      <!-- @slot Card action container can have action buttons, etc. -->
      <slot name="card-action" />
    </div>
  </component>
</template>

<script>
export default {
  name: 'VhCard',
  props: {
    /**
     * Card will be active and unable to be interacted with
     */
    active: {
      type: Boolean,
      default: false,
    },
    /**
     * Card will expand to full width of container
     */
    block: {
      type: Boolean,
      default: false,
    },
    /**
     * Card header background color will change
     */
    color: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(blue|red)/);
      },
    },
    /**
     * Card's flex direction will be set to horizontal
     */
    horizontal: {
      type: Boolean,
      default: false,
    },
    hover: {
      type: Boolean,
      default: false,
    },
    /**
     * Card will become a clickable hyperlink
     */
    href: {
      type: String,
      default: null,
    },
    /**
     * Card will become a nuxt-link using href as "to"
     */
    nuxt: {
      type: Boolean,
      default: false,
    },
    /**
     * Card exterior will have padding, removes container padding
     */
    padded: {
      type: Boolean,
      default: false,
    },
    twoLineTitle: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    attrs() {
      const { nuxt, href } = this;
      const attrs = {};

      if (!nuxt && href) attrs.href = this.href;

      return attrs;
    },
    computedClasses: function() {
      return {
        'Card--horizontal': Boolean(this.horizontal),
        'Card--hover': Boolean(this.href || this.nuxt || this.hover),
        'Card--padded': Boolean(this.padded),
        'Card--block': Boolean(this.block),
        [`Card--${this.color}`]: Boolean(this.color),
        'Card--twoLineTitle': Boolean(this.twoLineTitle),
        'is-active': Boolean(this.active),
      };
    },
    computedElement: function() {
      if (this.nuxt && this.href) {
        return 'nuxt-link';
      } else if (this.href) {
        return 'a';
      } else {
        return 'div';
      }
    },
  },
};
</script>

<style scoped>
/* BLOCK */

.Card {
  --Card-borderColor: var(--color--grey300);
  --Card-color: var(--color--grey700);
  --Card-hoverEnterTransition: 0.3s ease-out;
  --Card-hoverExitTransition: 0.3s ease-in;
  --Card-clickTransition: 0.15s ease-in;

  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--Card-borderColor);
  text-align: start;
  min-width: min-content;
  max-width: max-content;
  width: 290px;
}

/* ELEMENTS */

.Card-default:not(:empty) {
  border-bottom: 1px solid var(--Card-borderColor);
}

.Card-header {
  display: flex;
  align-items: center;
  padding: var(--space--small);
}

.Card-title {
  margin-bottom: var(--space--medium);
  font-size: var(--font-size--large);
  font-weight: var(--font-weight--bold);
  overflow: hidden;
  max-height: 1.575rem;

  & >>> * {
    margin-bottom: 0;
  }
}

.Card--twoLineTitle .Card-title {
  max-height: 3.15rem;
}

.Card-header *:not(:last-child) {
  margin-right: var(--space--small);
}

.Card-content {
  padding: var(--space--medium);
  color: var(--Card-color);
  width: 100%;
  height: 100%;
}

.Card-action {
  padding: var(--space--small);
}

.Card-header:empty,
.Card-title:empty,
.Card-content:empty,
.Card-action:empty {
  display: none;
}

/* MODIFIERS */

.Card--block {
  max-width: 100%;
  width: 100%;
}

.Card--padded {
  padding: var(--space--large);

  & .Card-content {
    padding: 0;
  }
}

.Card--hover {
  cursor: pointer;
  color: var(--text-color);
}

.Card--hover.nuxt-link-exact-active {
  font-weight: initial;
}

.Card--hover:link,
.Card--hover:visited {
  text-decoration: none;
}

.Card--hover.is-active {
  pointer-events: none;
  border: 2px solid var(--color--green700);
}

.Card--hover::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  box-shadow: 5px 5px 20px var(--Card-borderColor);
  will-change: opacity;
  transition: opacity var(--Card-hoverExitTransition);
  z-index: calc(var(--z-index--low) * -1);
}

.Card--hover:hover::after {
  opacity: 1;
  transition: opacity var(--Card-hoverEnterTransition);
}

.Card--hover:active::after {
  opacity: 0;
  transition: opacity var(--Card-clickTransition);
}

.Card--blue {
  & .Card-header {
    background-color: var(--color--blue500);
    color: var(--color--white);
  }
}

.Card--red {
  & .Card-header {
    background-color: var(--color--red700);
    color: var(--color--white);
  }
}

.Card--horizontal {
  flex-direction: row;
  width: auto;

  & .Card-content {
    flex-direction: column;
    justify-content: center;
  }

  & .Card-default:not(:empty) {
    border-bottom: none;
  }
}
</style>
