<template>
  <div
    class="Progress"
    :class="computedSize"
    role="presentation"
  >
    <div class="Progress-track">
      <div
        class="Progress-bar"
        :class="computedColor"
        :style="{ width: computedWidth }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VhProgressBar',
  props: {
    /**
     *  One of these colors: orange, green, blue
     */
    color: {
      type: String,
      default: 'orange',
      validator: value => {
        return value.match(/(green|yellow|red|orange|blue)/);
      },
    },
    /**
     * One of these sizes: small, medium, large
     */
    size: {
      type: String,
      default: 'medium',
      validator: value => {
        return value.match(/(small|medium|large)/);
      },
    },
    /**
     * value number from 0 to 100
     */
    value: {
      type: [Number, String],
      default: 0,
    },
  },

  computed: {
    computedSize() {
      return {
        [`Progress--${this.size}`]: this.size,
      };
    },
    computedColor() {
      return {
        [`Progress-bar--${this.color}`]: this.color,
      };
    },

    computedWidth() {
      return `${this.normalizedValue}%`;
    },

    normalizedValue() {
      if (this.value < 0) {
        return 0;
      }

      if (this.value > 100) {
        return 100;
      }

      return parseFloat(this.value);
    },
  },
};
</script>

<style scoped>
.Progress {
  display: block;
  height: var(--space--large);
}

.Progress-track {
  background-color: var(--color--grey200);
  height: 100%;
  width: 100%;
}

.Progress-bar {
  height: 100%;
  width: 0;
}

/* bar sizes */
.Progress--small {
  height: var(--space--small);
}

.Progress--medium {
  height: var(--space--medium);
}

.Progress--large {
  height: var(--space--large);
}

/* bar colors */
.Progress-bar--orange {
  background-color: var(--color--orange500);
}

.Progress-bar--yellow {
  background-color: var(--color--yellow500);
}

.Progress-bar--red {
  background-color: var(--color--red500);
}

.Progress-bar--green {
  background-color: var(--color--green700);
}

.Progress-bar--blue {
  background-color: var(--color--blue500);
}
</style>
