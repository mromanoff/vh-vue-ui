import { shallowMount } from '@vue/test-utils';
import VhNavigationButton from '../VhNavigationButton.vue';

describe('VhNavigationButton.vue', () => {
  let wrapper;

  // TEST functional component with passing props: https://vue-test-utils.vuejs.org/api/options.html#context

  beforeEach(() => {
    wrapper = shallowMount(VhNavigationButton, {
      slots: {
        default: 'Test VhNavigationButton',
      },
      stubs: ['vh-icon'],
    });
  });

  it('renders default button', () => {
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VhNavigationButton']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled button', () => {
    wrapper = shallowMount(VhNavigationButton, {
      propsData: { disabled: true },
      slots: {
        default: 'Test VhNavigationButton',
      },
      stubs: ['vh-icon'],
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VhNavigationButton', 'VhNavigationButton--disabled']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders static button', () => {
    wrapper = shallowMount(VhNavigationButton, {
      propsData: { isStatic: true },
      slots: {
        default: 'Test VhNavigationButton',
      },
      stubs: ['vh-icon'],
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VhNavigationButton', 'VhNavigationButton--static']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders current button', () => {
    wrapper = shallowMount(VhNavigationButton, {
      propsData: { current: true },
      slots: {
        default: 'Test VhNavigationButton',
      },
      stubs: ['vh-icon'],
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VhNavigationButton', 'VhNavigationButton--current']);
    expect(wrapper).toMatchSnapshot();
  });
});
