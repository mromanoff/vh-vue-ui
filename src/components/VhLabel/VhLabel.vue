<script type="text/jsx">
export default {
  name: 'VhLabel',
  functional: true,
  props: {
    /**
     *  One of these colors: grey, green, blue, black
     */
    color: {
      type: String,
      default: 'grey',
      validator: value => {
        return value.match(/(grey|green|blue|black)/);
      },
    },
  },

  render(h, { props, data, slots }) {
    const classes = {
      VhLabel: true,
      [data.staticClass]: data.staticClass,
      [`VhLabel--${props.color}`]: props.color,
      [`VhLabel--${props.size}`]: props.size,
    };

    return (
      <div class={classes} {...data}>
        {slots().default}
      </div>
    );
  },
};
</script>

<style scoped>
.VhLabel {
  font-size: var(--font-size--xSmall);
  line-height: 1;
  height: var(--space--large);
  align-items: center;
  border-radius: 3px;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  color: var(--text-color);
  padding: 0 var(--space--small);
  text-transform: uppercase;
  font-weight: var(--font-weight--medium);
}

/* Label colors */
.VhLabel--grey {
  color: var(--color--grey700);
  background-color: var(--color--grey200);
}

.VhLabel--green {
  color: var(--color--white);
  background-color: var(--color--green700);
}

.VhLabel--blue {
  color: var(--color--blue700);
  background-color: var(--color--blue100);
}

.VhLabel--black {
  color: var(--color--white);
  background-color: var(--color--black);
}
</style>
