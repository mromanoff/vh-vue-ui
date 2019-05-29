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

    <select
      :id="name"
      :disabled="disabled"
      class="Form-input"
      v-bind="$attrs"
      :value="value"
      v-on="listeners"
    >
      <option
        v-for="option in options"
        :key="option.id"
        :selected="option.id === value"
        :value="option.id"
      >
        {{ option.name }}
      </option>
    </select>
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
  name: 'Select',
  inheritAttrs: false,

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
      default: '', // TODO: it is where UUID comes here
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
     *   Filed options. pass valid array of objects
     */
    options: {
      type: Array,
      required: true,
    },
    /**
     *   Filed disabled.
     */
    disabled: {
      type: Boolean,
      default: false,
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
    listeners() {
      return {
        ...this.$listeners,
        change: event => this.$root.$emit('change', this.name, event.target.value),
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
  height: var(--Form-input-height);
  background: var(--color--white);
}

/* Custom ui arrow */
select.Form-input {
  appearance: none;
  background-image: var(--Form-select-arrow);
  background-position: right calc(var(--Form-input-padding) / 2) center;
  background-repeat: no-repeat;
  background-size: var(--Form-select-arrow-width);
  padding-right: calc(var(--Form-select-arrow-width) + (2 * var(--Form-input-padding)));
  line-height: 1.2;
}

.Form-input[disabled] {
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
    font-size: var(--font-size--xSmall);
    height: calc(var(--Form-input-height) / 2);
  }

  & select.Form-input {
    appearance: none;
    background-image: var(--Form-select-arrow);
    background-position: right calc(var(--Form-input-padding) / 2) center;
    background-repeat: no-repeat;
    background-size: var(--Form-select-arrow-width--small);
    padding-right: calc(var(--Form-select-arrow-width) + (2 * var(--Form-input-padding)));
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
