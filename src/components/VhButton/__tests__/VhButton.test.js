import { shallowMount } from '@vue/test-utils';
import VhButton from '../VhButton.vue';

describe.skip('VhButton.vue', () => {
  let wrapper;

  // TEST functional component with passing props: https://vue-test-utils.vuejs.org/api/options.html#context

  beforeEach(() => {
    wrapper = shallowMount(VhButton, {
      context: {
        props: { size: 'medium' },
      },
      slots: {
        default: 'Test VhButton',
      },
    });
  });

  it('renders default button', () => {
    expect(wrapper.isFunctionalComponent).toBe(true);
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VhButton', 'VhButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled button', () => {
    wrapper = shallowMount(VhButton, {
      context: {
        props: { disabled: true },
      },
      slots: {
        default: 'Primary VhButton',
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VhButton', 'VhButton--disabled', 'VhButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders primary button', () => {
    wrapper = shallowMount(VhButton, {
      context: {
        props: { variation: 'primary' },
      },
      slots: {
        default: 'Primary VhButton',
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VhButton', 'VhButton--primary', 'VhButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders secondary button', () => {
    wrapper = shallowMount(VhButton, {
      context: {
        props: { variation: 'secondary' },
      },
      slots: {
        default: 'Secondary VhButton',
      },
    });
    expect(wrapper.rootNode.tag).toBe('button');
    expect(wrapper.classes()).toStrictEqual(['VhButton', 'VhButton--secondary', 'VhButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders text button', () => {
    wrapper = shallowMount(VhButton, {
      context: {
        props: { variation: 'text' },
      },
      slots: {
        default: 'Text VhButton',
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VhButton', 'VhButton--text', 'VhButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders small button', () => {
    wrapper = shallowMount(VhButton, {
      context: {
        props: { size: 'small' },
      },
      slots: {
        default: 'Small VhButton',
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VhButton', 'VhButton--small']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders large button', () => {
    wrapper = shallowMount(VhButton, {
      context: {
        props: { size: 'large' },
      },
      slots: {
        default: 'Large VhButton',
      },
    });

    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VhButton', 'VhButton--large']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders HREF button as A TAG', () => {
    wrapper = shallowMount(VhButton, {
      context: {
        props: { href: 'https://vehiclehistory.com' },
      },
      slots: {
        default: 'Nuxt-link A TAG VhButton',
      },
    });

    expect(wrapper.is('a')).toBe(true);
    expect(wrapper.attributes().href).toBe('https://vehiclehistory.com');
    expect(wrapper.classes()).toStrictEqual(['VhButton', 'VhButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders NUXT button as A TAG', () => {
    wrapper = shallowMount(VhButton, {
      context: {
        props: {
          nuxt: true,
          href: 'https://vehiclehistory.com',
        },
      },
      slots: {
        default: 'Nuxt-link A TAG VhButton',
      },
      stubs: ['nuxt-link'],
    });

    expect(wrapper.is('nuxt-link-stub')).toBe(true);
    expect(wrapper.attributes().to).toBe('https://vehiclehistory.com');
    expect(wrapper.classes()).toStrictEqual(['VhButton', 'VhButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders full width button', () => {
    wrapper = shallowMount(VhButton, {
      context: {
        props: { block: true },
      },
      slots: {
        default: 'Block VhButton',
      },
    });

    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VhButton', 'VhButton--block', 'VhButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });
});
