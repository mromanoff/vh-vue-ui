<template>
  <div
    class="VhNotification"
    :class="computedClasses"
  >
    <vh-icon
      class="VhNotification-svg"
      name="error"
      :color="computedIconColor"
      size="large"
    />
    <div class="VhNotification-message">
      <slot />
    </div>
    <button
      v-if="dismissible"
      class="VhNotification-closeButton"
    >
      <vh-icon
        name="close"
        size="medium"
        :color="computedIconColor"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: 'VhNotification',
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

  computed: {
    computedClasses() {
      return {
        'VhNotification--info': this.type === 'info',
        'VhNotification--warning': this.type === 'warning',
        'VhNotification--success': this.type === 'success',
        'VhNotification--error': this.type === 'error',
      };
    },

    computedIconColor() {
      let color;
      switch (this.type) {
        case 'info':
          color = 'lightBlue';
          break;

        case 'warning':
          color = 'yellow';
          break;

        case 'success':
          color = 'green';
          break;

        case 'error':
          color = 'red';
          break;
        default:
          console.warn("Notification type doesn't exist " + this.type + '.');
      }

      return color;
    },
  },
  methods: {
    onClick() {
      /* TOTO: please verify this implementation */
      this.$emit('remove', this);
    },
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
