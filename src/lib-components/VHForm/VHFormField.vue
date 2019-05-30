<template>
  <div
    class="Form-field"
    :class="fieldClasses"
  >
    <slot />
    <p
      v-show="message"
      class="Form-message"
    >
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'FormField',

  props: {
    state: {
      type: String,
      default: null,
    },
    message: {
      type: String,
      default: null,
    },
    /**
     * One of these sizes: xSmall, small, medium, large
     */
    size: {
      type: String,
      default: 'medium',
      validator: value => {
        return value.match(/(small|medium|large)/);
      },
    },
    /**
     *  One of these theme: light, dark
     */
    theme: {
      type: String,
      default: 'light',
      validator: value => {
        return value.match(/(light|dark)/);
      },
    },
  },
  computed: {
    fieldClasses() {
      return {
        [`Form-field--${this.size}`]: this.size,
        [`Form-field--${this.theme}`]: this.theme,
        [`Form-field--${this.state}`]: this.state,
      };
    },
  },
};
</script>

<style scoped>
.Form-field {
  margin-bottom: var(--space--small);
}

.Form-message {
  font-size: var(--font-size--xSmall);
  margin-top: var(--space--xSmall);
  display: block;
  position: relative;
  padding: var(--space--xSmall) var(--space--small);
}

.Form-message::before {
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
  left: var(--space--medium);
  top: -4px;
  border: transparent 4px solid;
  transform: rotate(45deg);
}

.Form-field--dark {
  background-color: var(--color--blue700);
  & .Form-label {
    color: var(--color--blue50);
  }

  & .Form-input {
    color: var(--color--blue50);
    background-color: var(--color--blue700);
    border-color: var(--color--blue600);
  }
}

.Form-field--small {
  & .Form-label {
    font-size: var(--font-size--xSmall);
    margin-bottom: var(--space--xSmall);
  }

  & .Form-input {
    font-size: var(--font-size--small);
    height: calc(var(--Form-input-height) / 2);
  }
}

.Form-field--medium {
  & .Form-input {
    height: var(--Form-input-height);
  }
}

.Form-field--large {
  & .Form-input {
    height: calc(var(--Form-input-height) * 1.5);
  }
}

.Form-field--invalid {
  & .Form-label {
    color: var(--color--red500);
  }

  & .Form-input {
    color: var(--color--red500);
    border-color: var(--color--red500);
  }

  & .Form-message {
    background-color: var(--color--red700);
    color: var(--color--grey50);
  }

  & .Form-message::before {
    border-color: var(--color--red700) transparent transparent var(--color--red700);
  }
}
</style>
