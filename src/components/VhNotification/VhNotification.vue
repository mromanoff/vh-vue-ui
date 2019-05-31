<script type="text/jsx">
export default {
  name: 'VhNotification',
  functional: true,
  props: {
    /**
     * Notification Type: info, warning, success, error.
     */
    type: {
      type: String,
      default: 'info',
      validator: value => {
        return value.match(/(info|warning|success|error)/);
      },
    },
    /**
     * Dismissible Notification: true, false
     */
    dismissible: {
      type: Boolean,
      default: false,
    },
    /**
     * VhNotification is active
     */
    value: {
      type: Boolean,
      default: true,
    },
  },

  render(h, { props, data, listeners, slots }) {
    if (!props.value) return null;

    const classes = {
      VhNotification: true,
      [`VhNotification--${props.type}`]: props.type,
    };
    let color;
    switch (props.type) {
      case 'info':
        color = 'darkBlue';
        break;

      case 'warning':
        color = 'darkYellow';
        break;

      case 'success':
        color = 'darkGreen';
        break;

      case 'error':
        color = 'darkRed';
        break;
      default:
        console.warn("Notification type doesn't exist " + props.type + '.');
    }

    return (
      <div class={classes} {...data}>
        <vh-icon class="VhNotification-svg" name="error" size="large" color={color} />
        <div class="VhNotification-message">{slots().default}</div>
        {props.dismissible && (
          <button
            class="VhNotification-closeButton"
            onClick={() => {
              listeners.input(false);
            }}
          >
            <vh-icon name="close" size="medium" color={color} />
          </button>
        )}
      </div>
    );
  },
};
</script>

<style scoped>
.VhNotification {
  position: relative;
  display: flex;
  padding: var(--space--medium) 0;
  color: var(--text-color);
  align-items: center;
}

.VhNotification-svg {
  width: 72px;
  flex: 0 0 72px;
}

.VhNotification-message {
  flex: 1 1 auto;
  margin-right: 64px;
}

.VhNotification-closeButton {
  position: absolute;
  right: 8px;
  top: 8px;
  border: none;
  width: 44px;
  height: 44px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.VhNotification-closeButton:focus {
  outline: 0;
}

.VhNotification--info {
  background-color: color-mod(var(--color--blue200) a(50%));
  color: var(--color--blue700);
}

.VhNotification--success {
  background-color: color-mod(var(--color--green300) a(50%));
  color: var(--color--green700);
}

.VhNotification--warning {
  background-color: color-mod(var(--color--yellow300) a(50%));
  color: var(--color--yellow700);
}

.VhNotification--error {
  background-color: color-mod(var(--color--red300) a(50%));
  color: var(--color--red700);
}
</style>
