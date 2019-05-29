<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 170 170"
    class="Progress"
    :class="computedSize"
  >
    <g transform="rotate(90 85 85)">
      <circle
        class="Progress-track"
        stroke-width="22"
        fill="none"
        cx="85"
        cy="85"
        :r="radius"
      />
    </g>
    <g transform="rotate(90 85 85)">
      <circle
        class="Progress-bar"
        :class="computedColor"
        stroke-width="22"
        :stroke-dasharray="strokeDasharray"
        stroke-linecap="butt"
        fill="none"
        cx="85"
        cy="85"
        :r="radius"
      />
    </g>
    <text
      class="Progress-label"
      x="86"
      y="106"
      text-anchor="middle"
    >
      {{ label }}
    </text>
  </svg>
</template>

<script>
/*
Example:
Radius = 85
Percentage to fill = 25
π = 3.14159
Circumference = 2 * π * Radius = 534
Stroke length = (Circumference / 100) * Percentage to fill
*/
export default {
  name: 'VhProgressDonut',
  props: {
    /**
     *  One of these colors: orange, green, blue
     */
    color: {
      type: String,
      default: 'green',
      validator: value => {
        return value.match(/(green|orange|blue)/);
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
    /**
     * label: 4.5 etc.
     */
    label: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      radius: 70,
      Pi: 3.14159,
    };
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

    circumference() {
      return 2 * this.Pi * this.radius;
    },

    strokeLength() {
      return (this.circumference / 100) * this.normalizedValue;
    },

    strokeDasharray() {
      return `${this.strokeLength}, ${this.circumference}`;
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
  display: inline-block;
  font-weight: var(--font-weight--normal);
}

.Progress-track {
  stroke: var(--color--grey200);
}

.Progress-bar {
  height: 100%;
  width: 0;
}

.Progress-label {
  fill: var(--text-color);
  font-size: 60px;
}

/* donut sizes */
.Progress--small {
  height: 36px;
  width: 36px;
}

.Progress--medium {
  height: 46px;
  width: 46px;
}

.Progress--large {
  height: 64px;
  width: 64px;
}

/* bar colors */
.Progress-bar--green {
  stroke: var(--color--green700);
}

.Progress-bar--orange {
  stroke: var(--color--orange500);
}

.Progress-bar--blue {
  stroke: var(--color--blue500);
}
</style>
