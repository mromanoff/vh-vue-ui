import { shallowMount } from '@vue/test-utils';
import VhFloatingButton from '../VhFloatingButton.vue';

describe('VhFloatingButton.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VhFloatingButton, {
      slots: {
        default: 'Floating Button Label',
      },
    });
  });

  it('renders default button', () => {
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VhFloatingButton', 'VhFloatingButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders small button', () => {
    wrapper = shallowMount(VhFloatingButton, {
      propsData: {
        size: 'small',
      },
      slots: {
        default: 'Floating Button Label',
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VhFloatingButton', 'VhFloatingButton--small']);
    expect(wrapper).toMatchSnapshot();
  });
});
