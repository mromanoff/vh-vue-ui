import { shallowMount } from '@vue/test-utils';
import VHFloatingButton from '../VHFloatingButton.vue';

describe('VHFloatingButton.vue', () => {
  let wrapper;

  // TEST functional component with passing props: https://vue-test-utils.vuejs.org/api/options.html#context

  beforeEach(() => {
    wrapper = shallowMount(VHFloatingButton, {
      context: {
        props: { size: 'medium' },
      },
      slots: {
        default: '0',
      },
    });
  });

  it('renders default button', () => {
    expect(wrapper.isFunctionalComponent).toBe(true);
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VHFloatingButton', 'VHFloatingButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders small button', () => {
    wrapper = shallowMount(VHFloatingButton, {
      context: {
        props: { size: 'small' },
      },
      slots: {
        default: '0',
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VHFloatingButton', 'VHFloatingButton--small']);
    expect(wrapper).toMatchSnapshot();
  });
});
