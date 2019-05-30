import { shallowMount } from '@vue/test-utils';
import VHNavigationButton from '../VHNavigationButton.vue';

describe('VHNavigationButton.vue', () => {
  let wrapper;

  // TEST functional component with passing props: https://vue-test-utils.vuejs.org/api/options.html#context

  beforeEach(() => {
    wrapper = shallowMount(VHNavigationButton, {
      slots: {
        default: 'Test VHNavigationButton',
      },
      stubs: ['vh-icon'],
    });
  });

  it('renders default button', () => {
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VHNavigationButton']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled button', () => {
    wrapper = shallowMount(VHNavigationButton, {
      propsData: { disabled: true },
      slots: {
        default: 'Test VHNavigationButton',
      },
      stubs: ['vh-icon'],
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VHNavigationButton', 'VHNavigationButton--disabled']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders static button', () => {
    wrapper = shallowMount(VHNavigationButton, {
      propsData: { isStatic: true },
      slots: {
        default: 'Test VHNavigationButton',
      },
      stubs: ['vh-icon'],
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VHNavigationButton', 'VHNavigationButton--static']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders current button', () => {
    wrapper = shallowMount(VHNavigationButton, {
      propsData: { current: true },
      slots: {
        default: 'Test VHNavigationButton',
      },
      stubs: ['vh-icon'],
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VHNavigationButton', 'VHNavigationButton--current']);
    expect(wrapper).toMatchSnapshot();
  });
});
