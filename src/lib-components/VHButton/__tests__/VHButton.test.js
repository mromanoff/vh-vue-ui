import { shallowMount } from '@vue/test-utils';
import VHButton from '../VHButton.vue';

describe.skip('VHButton.vue', () => {
  let wrapper;

  // TEST functional component with passing props: https://vue-test-utils.vuejs.org/api/options.html#context

  beforeEach(() => {
    wrapper = shallowMount(VHButton, {
      context: {
        props: { size: 'medium' },
      },
      slots: {
        default: 'Test VHButton',
      },
    });
  });

  it('renders default button', () => {
    expect(wrapper.isFunctionalComponent).toBe(true);
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VHButton', 'VHButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled button', () => {
    wrapper = shallowMount(VHButton, {
      context: {
        props: { disabled: true },
      },
      slots: {
        default: 'Primary VHButton',
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VHButton', 'VHButton--disabled', 'VHButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders primary button', () => {
    wrapper = shallowMount(VHButton, {
      context: {
        props: { variation: 'primary' },
      },
      slots: {
        default: 'Primary VHButton',
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VHButton', 'VHButton--primary', 'VHButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders secondary button', () => {
    wrapper = shallowMount(VHButton, {
      context: {
        props: { variation: 'secondary' },
      },
      slots: {
        default: 'Secondary VHButton',
      },
    });
    expect(wrapper.rootNode.tag).toBe('button');
    expect(wrapper.classes()).toStrictEqual(['VHButton', 'VHButton--secondary', 'VHButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders text button', () => {
    wrapper = shallowMount(VHButton, {
      context: {
        props: { variation: 'text' },
      },
      slots: {
        default: 'Text VHButton',
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VHButton', 'VHButton--text', 'VHButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders small button', () => {
    wrapper = shallowMount(VHButton, {
      context: {
        props: { size: 'small' },
      },
      slots: {
        default: 'Small VHButton',
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VHButton', 'VHButton--small']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders large button', () => {
    wrapper = shallowMount(VHButton, {
      context: {
        props: { size: 'large' },
      },
      slots: {
        default: 'Large VHButton',
      },
    });

    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VHButton', 'VHButton--large']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders HREF button as A TAG', () => {
    wrapper = shallowMount(VHButton, {
      context: {
        props: { href: 'https://vehiclehistory.com' },
      },
      slots: {
        default: 'Nuxt-link A TAG VHButton',
      },
    });

    expect(wrapper.is('a')).toBe(true);
    expect(wrapper.attributes().href).toBe('https://vehiclehistory.com');
    expect(wrapper.classes()).toStrictEqual(['VHButton', 'VHButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders NUXT button as A TAG', () => {
    wrapper = shallowMount(VHButton, {
      context: {
        props: {
          nuxt: true,
          href: 'https://vehiclehistory.com',
        },
      },
      slots: {
        default: 'Nuxt-link A TAG VHButton',
      },
      stubs: ['nuxt-link'],
    });

    expect(wrapper.is('nuxt-link-stub')).toBe(true);
    expect(wrapper.attributes().to).toBe('https://vehiclehistory.com');
    expect(wrapper.classes()).toStrictEqual(['VHButton', 'VHButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders full width button', () => {
    wrapper = shallowMount(VHButton, {
      context: {
        props: { block: true },
      },
      slots: {
        default: 'Block VHButton',
      },
    });

    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VHButton', 'VHButton--block', 'VHButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });
});
