<template>
  <component
    :is="computedElement"
    class="VhCard"
    :class="computedClasses"
    :to="nuxt && href"
    v-bind="attrs"
    v-on="$listeners"
  >
    <!-- @slot Default slot can take content like images -->
    <div class="VhCard-default">
      <slot />
    </div>

    <div class="VhCard-header">
      <!-- @slot Card Header contains header, icons, etc. outside of content -->
      <slot name="card-header" />
    </div>
    <div class="VhCard-content">
      <div class="VhCard-title">
        <!-- @slot Card Title contains content title -->
        <slot name="card-title" />
      </div>
      <!-- @slot Card content contains content, text, etc. -->
      <slot name="card-content" />
    </div>

    <div class="VhCard-action">
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
        'VhCard--horizontal': Boolean(this.horizontal),
        'VhCard--hover': Boolean(this.href || this.nuxt || this.hover),
        'VhCard--padded': Boolean(this.padded),
        'VhCard--block': Boolean(this.block),
        [`VhCard--${this.color}`]: Boolean(this.color),
        'VhCard--twoLineTitle': Boolean(this.twoLineTitle),
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

.VhCard {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--VhCard-borderColor);
  text-align: start;
  min-width: min-content;
  max-width: max-content;
  width: 290px;
}

/* ELEMENTS */

.VhCard-default:not(:empty) {
  border-bottom: 1px solid var(--VhCard-borderColor);
}

.VhCard-header {
  display: flex;
  align-items: center;
  padding: var(--space--small);
}

.VhCard-title {
  margin-bottom: var(--space--medium);
  font-size: var(--font-size--large);
  font-weight: var(--font-weight--bold);
  overflow: hidden;
  max-height: 1.575rem;

  & >>> * {
    margin-bottom: 0;
  }
}

.VhCard--twoLineTitle .VhCard-title {
  max-height: 3.15rem;
}

.VhCard-header *:not(:last-child) {
  margin-right: var(--space--small);
}

.VhCard-content {
  padding: var(--space--medium);
  color: var(--VhCard-color);
  width: 100%;
  height: 100%;
}

.VhCard-action {
  padding: var(--space--small);
}

.VhCard-header:empty,
.VhCard-title:empty,
.VhCard-content:empty,
.VhCard-action:empty {
  display: none;
}

/* MODIFIERS */

.VhCard--block {
  max-width: 100%;
  width: 100%;
}

.VhCard--padded {
  padding: var(--space--large);

  & .VhCard-content {
    padding: 0;
  }
}

.VhCard--hover {
  cursor: pointer;
  color: var(--text-color);
}

.VhCard--hover.nuxt-link-exact-active {
  font-weight: initial;
}

.VhCard--hover:link,
.VhCard--hover:visited {
  text-decoration: none;
}

.VhCard--hover.is-active {
  pointer-events: none;
  border: 2px solid var(--color--green700);
}

.VhCard--hover::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  box-shadow: 5px 5px 20px var(--VhCard-borderColor);
  will-change: opacity;
  transition: opacity var(--VhCard-hoverExitTransition);
  z-index: calc(var(--z-index--low) * -1);
}

.VhCard--hover:hover::after {
  opacity: 1;
  transition: opacity var(--VhCard-hoverEnterTransition);
}

.VhCard--hover:active::after {
  opacity: 0;
  transition: opacity var(--VhCard-clickTransition);
}

.VhCard--blue {
  & .VhCard-header {
    background-color: var(--color--blue500);
    color: var(--color--white);
  }
}

.VhCard--red {
  & .VhCard-header {
    background-color: var(--color--red700);
    color: var(--color--white);
  }
}

.VhCard--horizontal {
  flex-direction: row;
  width: auto;

  & .VhCard-content {
    flex-direction: column;
    justify-content: center;
  }

  & .VhCard-default:not(:empty) {
    border-bottom: none;
  }
}
</style>
