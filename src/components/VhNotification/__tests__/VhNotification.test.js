import { shallowMount } from '@vue/test-utils';
import VhNotification from '../VhNotification.vue';

describe('VhNotification.vue', () => {
  let wrapper;

  // TEST functional component with passing props: https://vue-test-utils.vuejs.org/api/options.html#context

  beforeEach(() => {
    wrapper = shallowMount(VhNotification, {
      context: {
        props: { type: 'info' },
      },
      slots: {
        default: 'A simple error notification message.',
      },
      stubs: ['vh-icon'],
    });
  });

  it('renders default Info VhNotification', () => {
    expect(wrapper.isFunctionalComponent).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VhNotification', 'VhNotification--info']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Warning VhNotification', () => {
    wrapper = shallowMount(VhNotification, {
      context: {
        props: { type: 'warning' },
      },
      slots: {
        default: 'A simple error notification message.',
      },
      stubs: ['vh-icon'],
    });

    expect(wrapper.classes()).toStrictEqual(['VhNotification', 'VhNotification--warning']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Success VhNotification', () => {
    wrapper = shallowMount(VhNotification, {
      context: {
        props: { type: 'success' },
      },
      slots: {
        default: 'A simple error notification message.',
      },
      stubs: ['vh-icon'],
    });

    expect(wrapper.classes()).toStrictEqual(['VhNotification', 'VhNotification--success']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Error VhNotification', () => {
    wrapper = shallowMount(VhNotification, {
      context: {
        props: { type: 'error' },
      },
      slots: {
        default: 'A simple error notification message.',
      },
      stubs: ['vh-icon'],
    });

    expect(wrapper.classes()).toStrictEqual(['VhNotification', 'VhNotification--error']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders dissmissible Info VhNotification', () => {
    wrapper = shallowMount(VhNotification, {
      context: {
        props: { type: 'info', dismissible: true },
      },
      slots: {
        default: 'A simple error notification message.',
      },
      stubs: ['vh-icon'],
    });

    const closeButton = wrapper.find('.VhNotification-closeButton');
    expect(wrapper.classes()).toStrictEqual(['VhNotification', 'VhNotification--info']);
    expect(closeButton.is('button')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
