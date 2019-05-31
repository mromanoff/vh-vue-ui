import { shallowMount } from '@vue/test-utils';
import VhColorSwatch from '../VhColorSwatch.vue';

describe('VhColorSwatch.vue', () => {
  let wrapper;

  // TEST functional component with passing props: https://vue-test-utils.vuejs.org/api/options.html#context

  beforeEach(() => {
    wrapper = shallowMount(VhColorSwatch, {
      context: {
        props: { size: 'medium', color: '#ffcb59' },
      },
    });
  });

  it('renders default VhColorSwatch', () => {
    expect(wrapper.isFunctionalComponent).toBe(true);
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['ColorSwatch', 'ColorSwatch--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Disabled VhColorSwatch', () => {
    wrapper = shallowMount(VhColorSwatch, {
      context: {
        props: { disabled: true, size: 'medium', color: '#ffcb59' },
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['ColorSwatch', 'ColorSwatch--disabled', 'ColorSwatch--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Active VhColorSwatch', () => {
    wrapper = shallowMount(VhColorSwatch, {
      context: {
        props: { active: true, size: 'medium', color: '#ffcb59' },
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['ColorSwatch', 'ColorSwatch--active', 'ColorSwatch--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Small VhColorSwatch', () => {
    wrapper = shallowMount(VhColorSwatch, {
      context: {
        props: { size: 'small', color: '#ffcb59' },
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['ColorSwatch', 'ColorSwatch--small']);
    expect(wrapper).toMatchSnapshot();
  });
});
