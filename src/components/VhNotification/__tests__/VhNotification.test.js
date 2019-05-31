import { shallowMount } from '@vue/test-utils';
import VhNotification from '../VhNotification.vue';

describe('VhNotification.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(VhNotification, {
      propsData: {
        type: 'info',
      },
      slots: {
        default: 'A simple error notification message.',
      },
      stubs: ['vh-icon'],
    });
  });

  it('renders default Info VhNotification', () => {
    expect(wrapper.classes()).toStrictEqual(['VhNotification', 'VhNotification--info']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Warning VhNotification', () => {
    wrapper = shallowMount(VhNotification, {
      propsData: {
        type: 'warning',
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
      propsData: {
        type: 'success',
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
      propsData: {
        type: 'error',
      },
      slots: {
        default: 'A simple error notification message.',
      },
      stubs: ['vh-icon'],
    });

    expect(wrapper.classes()).toStrictEqual(['VhNotification', 'VhNotification--error']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders dismissible Info VhNotification', () => {
    wrapper = shallowMount(VhNotification, {
      propsData: {
        type: 'info',
        dismissible: true,
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
