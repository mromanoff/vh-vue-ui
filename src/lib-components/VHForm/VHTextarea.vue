<template>
  <div
    :class="fieldClasses"
    class="Form-field"
  >
    <label
      :for="name"
      :class="[{ 'u-screenReaderOnly': labelHidden }]"
      class="Form-label"
    >
      {{ label }}
    </label>

    <textarea
      :id="name"
      class="Form-input"
      :class="textareaClasses"
      v-bind="$attrs"
      :value="value"
      :disabled="disabled"
      :cols="cols"
      :rows="rows"
      v-on="listeners"
    />
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
  name: 'Textarea',
  props: {
    /**
     *  Field label. if you want to hide this. use labelHidden = true
     */
    label: {
      type: String,
      required: true,
    },
    /**
     *   Filed label visibility.
     */
    labelHidden: {
      type: Boolean,
      default: false,
    },
    /**
     *   Filed name.
     */
    name: {
      type: String,
      default: '123', // TODO: it is where UUID comes here
      required: true,
    },
    /**
     *   Filed value.
     */
    value: {
      type: [String, Number],
      default: '',
    },
    /**
     *   Filed disabled.
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Columns count.
     */
    cols: {
      type: [Number, String],
      default: 30,
    },
    /**
     * Rows count.
     */
    rows: {
      type: [Number, String],
      default: 4,
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
     *   Filed state: invalid, dirty, pristine
     */
    state: {
      type: String,
      default: 'pristine',
      validator: value => {
        return value.match(/(invalid|dirty|pristine)/);
      },
    },
    /**
     *   Filed message could be error or info message
     */
    message: {
      type: String,
      default: '',
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
    textareaClasses() {
      return {
        'Form-input--disabled': this.disabled,
      };
    },
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value),
      };
    },
  },
};
</script>

<style scoped>
.Form-field {
  margin-bottom: var(--space--small);
}

.Form-label {
  margin-bottom: var(--space--small);
}

.Form-input {
  height: auto;
  resize: none;
}

.Form-input--disabled {
  opacity: var(--Form-input-disabled);
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

.Form-field--small {
  & .Form-label {
    font-size: var(--font-size--xSmall);
    margin-bottom: var(--space--xSmall);
  }

  & .Form-input {
    font-size: var(--font-size--small);
  }
}

.Form-field--medium {
  & .Form-input {
    height: auto;
  }
}

.Form-field--large {
  & .Form-input {
    height: auto;
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
