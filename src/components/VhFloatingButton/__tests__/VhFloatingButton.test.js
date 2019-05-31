import { shallowMount } from '@vue/test-utils';
import VhFloatingButton from '../VhFloatingButton.vue';

describe('VhFloatingButton.vue', () => {
  let wrapper;

  // TEST functional component with passing props: https://vue-test-utils.vuejs.org/api/options.html#context

  beforeEach(() => {
    wrapper = shallowMount(VhFloatingButton, {
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
    expect(wrapper.classes()).toStrictEqual(['VhFloatingButton', 'VhFloatingButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders small button', () => {
    wrapper = shallowMount(VhFloatingButton, {
      context: {
        props: { size: 'small' },
      },
      slots: {
        default: '0',
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VhFloatingButton', 'VhFloatingButton--small']);
    expect(wrapper).toMatchSnapshot();
  });
});
