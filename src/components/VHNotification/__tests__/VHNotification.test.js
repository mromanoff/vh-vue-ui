import { shallowMount } from '@vue/test-utils';
import VHNotification from '../VHNotification.vue';

describe('VHNotification.vue', () => {
  let wrapper;

  // TEST functional component with passing props: https://vue-test-utils.vuejs.org/api/options.html#context

  beforeEach(() => {
    wrapper = shallowMount(VHNotification, {
      context: {
        props: { type: 'info' },
      },
      slots: {
        default: 'A simple error notification message.',
      },
      stubs: ['vh-icon'],
    });
  });

  it('renders default Info VHNotification', () => {
    expect(wrapper.isFunctionalComponent).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VHNotification', 'VHNotification--info']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Warning VHNotification', () => {
    wrapper = shallowMount(VHNotification, {
      context: {
        props: { type: 'warning' },
      },
      slots: {
        default: 'A simple error notification message.',
      },
      stubs: ['vh-icon'],
    });

    expect(wrapper.classes()).toStrictEqual(['VHNotification', 'VHNotification--warning']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Success VHNotification', () => {
    wrapper = shallowMount(VHNotification, {
      context: {
        props: { type: 'success' },
      },
      slots: {
        default: 'A simple error notification message.',
      },
      stubs: ['vh-icon'],
    });

    expect(wrapper.classes()).toStrictEqual(['VHNotification', 'VHNotification--success']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Error VHNotification', () => {
    wrapper = shallowMount(VHNotification, {
      context: {
        props: { type: 'error' },
      },
      slots: {
        default: 'A simple error notification message.',
      },
      stubs: ['vh-icon'],
    });

    expect(wrapper.classes()).toStrictEqual(['VHNotification', 'VHNotification--error']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders dissmissible Info VHNotification', () => {
    wrapper = shallowMount(VHNotification, {
      context: {
        props: { type: 'info', dismissible: true },
      },
      slots: {
        default: 'A simple error notification message.',
      },
      stubs: ['vh-icon'],
    });

    const closeButton = wrapper.find('.VHNotification-closeButton');
    expect(wrapper.classes()).toStrictEqual(['VHNotification', 'VHNotification--info']);
    expect(closeButton.is('button')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
