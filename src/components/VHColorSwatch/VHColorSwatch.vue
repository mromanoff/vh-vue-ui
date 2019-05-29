<script type="text/jsx">
export default {
  name: 'VhColorSwatch',
  functional: true,
  props: {
    /**
     * Color Swatch will have active state
     */
    active: {
      type: Boolean,
      default: false,
    },
    /**
     * Color Swatch will take any valid CSS color value and apply it to background-color
     */
    color: {
      type: String,
      default: '',
      required: true,
    },
    /**
     * Color Swatch will be disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Swatch will become either "small" or "medium"
     */
    size: {
      type: String,
      default: 'medium',
      validator: value => {
        return value.match(/(small|medium)/);
      },
    },
  },

  render(h, { props, listeners }) {
    const classes = {
      ColorSwatch: true,
      'ColorSwatch--active': props.active,
      'ColorSwatch--disabled': props.disabled,
      [`ColorSwatch--${props.size}`]: props.size,
    };

    const innerClasses = {
      'ColorSwatch-inner': true,
      [`ColorSwatch-inner--${props.size}`]: props.size,
    };

    const styles = `background-color: ${props.color}`;

    return (
      <button class={classes} type="button" {...{ on: listeners }}>
        <span class={innerClasses} style={styles} />
      </button>
    );
  },
};
</script>

<style scoped>
.ColorSwatch {
  --ColorSwatch-outline-color: var(--color--grey500);
  --ColorSwatch-active-outline-color: var(--color--grey300);
  --ColorSwatch-size--base: 48px;
  --ColorSwatch-size--inner: 44px;
  --ColorSwatch-size--small: 24px;
  --ColorSwatch-size-inner--small: 22px;
  flex: 0 0 var(--ColorSwatch-size--base);
  align-items: center;
  justify-content: center;
  height: var(--ColorSwatch-size--base);
  width: var(--ColorSwatch-size--base);
  display: inline-flex;
  border-radius: 50%;
  outline: none;
  background-color: var(--color--blue100);
  cursor: pointer;
}

.ColorSwatch-inner {
  width: var(--ColorSwatch-size--inner);
  height: var(--ColorSwatch-size--inner);
  border-radius: 50%;
  display: block;
  border: 3px solid var(--color--white);
  transition: all 200ms ease-in-out;
}

.ColorSwatch-inner:hover {
  border: 3px solid var(--color--blue100);
}

.ColorSwatch--small {
  height: var(--ColorSwatch-size--small);
  width: var(--ColorSwatch-size--small);
  flex: 0 0 var(--ColorSwatch-size--small);
}

.ColorSwatch-inner--small {
  width: var(--ColorSwatch-size-inner--small);
  height: var(--ColorSwatch-size-inner--small);
  border: 2px solid var(--color--white);
  transition: all 200ms ease-in-out;
}

.ColorSwatch-inner--small:hover {
  border: 2px solid var(--color--blue100);
}

.ColorSwatch--active {
  pointer-events: none;
  background-color: var(--color--blue700);
}

.ColorSwatch--disabled {
  pointer-events: none;
}
</style>
