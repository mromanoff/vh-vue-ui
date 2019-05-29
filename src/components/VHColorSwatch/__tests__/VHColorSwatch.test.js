import { shallowMount } from '@vue/test-utils';
import VHColorSwatch from '../VHColorSwatch.vue';

describe('VHColorSwatch.vue', () => {
  let wrapper;

  // TEST functional component with passing props: https://vue-test-utils.vuejs.org/api/options.html#context

  beforeEach(() => {
    wrapper = shallowMount(VHColorSwatch, {
      context: {
        props: { size: 'medium', color: '#ffcb59' },
      },
    });
  });

  it('renders default VHColorSwatch', () => {
    expect(wrapper.isFunctionalComponent).toBe(true);
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['ColorSwatch', 'ColorSwatch--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Disabled VHColorSwatch', () => {
    wrapper = shallowMount(VHColorSwatch, {
      context: {
        props: { disabled: true, size: 'medium', color: '#ffcb59' },
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['ColorSwatch', 'ColorSwatch--disabled', 'ColorSwatch--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Active VHColorSwatch', () => {
    wrapper = shallowMount(VHColorSwatch, {
      context: {
        props: { active: true, size: 'medium', color: '#ffcb59' },
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['ColorSwatch', 'ColorSwatch--active', 'ColorSwatch--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Small VHColorSwatch', () => {
    wrapper = shallowMount(VHColorSwatch, {
      context: {
        props: { size: 'small', color: '#ffcb59' },
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['ColorSwatch', 'ColorSwatch--small']);
    expect(wrapper).toMatchSnapshot();
  });
});
