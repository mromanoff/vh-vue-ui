import { shallowMount } from '@vue/test-utils';
import VhIcon from '../VhIcon.vue';

describe.skip('VhIcon.vue', () => {
  let wrapper;

  // TEST functional component with passing props: https://vue-test-utils.vuejs.org/api/options.html#context

  beforeEach(() => {
    wrapper = shallowMount(VhIcon, {
      context: {
        props: { size: 'medium' },
      },
    });
  });

  it('renders default VhIcon', () => {
    expect(wrapper.isFunctionalComponent).toBe(true);
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VhButton', 'VhButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VhIcon', () => {
    wrapper = shallowMount(VhIcon, {
      propsData: {
        name: 'Test Name',
        color: 'red',
        size: 'large',
      },
    });
    expect(wrapper.props().color).toBe('red');
    expect(wrapper.props().name).toBe('Test Name');
    expect(wrapper.props().size).toBe('large');
    expect(wrapper).toMatchSnapshot();
  });
});
