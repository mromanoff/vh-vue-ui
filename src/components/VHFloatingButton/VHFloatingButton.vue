<script type="text/jsx">
export default {
  name: 'VhFloatingButton',
  functional: true,
  props: {
    /**
     * Button will become either "small" or "medium"
     */
    size: {
      type: String,
      default: 'medium',
      validator: value => {
        return value.match(/(small|medium)/);
      },
    },
  },

  render(h, { props, data, listeners, slots }) {
    const classes = {
      VHFloatingButton: true,
      [data.staticClass]: data.staticClass,
      [`VHFloatingButton--${props.size}`]: props.size,
    };

    return (
      <button
        class={classes}
        {...data}
        href={!props.nuxt && props.href ? props.href : null}
        to={props.nuxt && props.href}
        type={props.nuxt && props.href ? props.type : null}
      >
        {slots().default}
      </button>
    );
  },
};
</script>

<style scoped>
.VHFloatingButton {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--VHFloatingButton-color);
  background: var(--VHFloatingButton-backgroundColor);
  border-radius: var(--VHFloatingButton-borderRadius);
  user-select: none;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  line-height: 0;
  -webkit-appearance: button;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  transition: background-color 100ms ease-out 100ms;
  will-change: box-shadow;
  min-width: 0;
  padding: 0;
}

.VHFloatingButton:focus {
  outline: 0;
}

.VHFloatingButton:hover {
  background-color: var(--VHFloatingButton-backgroundColor-hover);
}

.VHFloatingButton:focus,
.VHFloatingButton:active {
  background-color: var(--VHFloatingButton-backgroundColor-active);
}

.VHFloatingButton--small {
  width: 24px;
  height: 24px;
}

.VHFloatingButton--medium {
  width: 48px;
  height: 48px;
}
</style>
