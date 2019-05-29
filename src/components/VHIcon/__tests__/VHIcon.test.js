import { shallowMount } from '@vue/test-utils';
import VHIcon from '../VHIcon.vue';

describe.skip('VHIcon.vue', () => {
  let wrapper;

  // TEST functional component with passing props: https://vue-test-utils.vuejs.org/api/options.html#context

  beforeEach(() => {
    wrapper = shallowMount(VHIcon, {
      context: {
        props: { size: 'medium' },
      },
    });
  });

  it('renders default VHIcon', () => {
    expect(wrapper.isFunctionalComponent).toBe(true);
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VHButton', 'VHButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VHIcon', () => {
    wrapper = shallowMount(VHIcon, {
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
