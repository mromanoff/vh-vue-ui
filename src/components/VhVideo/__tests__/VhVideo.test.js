import { shallowMount } from '@vue/test-utils';
import VhVideo from '../VhVideo.vue';

describe('VhVideo.vue', () => {
  let wrapper;

  it.skip('renders default VhVideo', () => {
    wrapper = shallowMount(VhVideo, {
      stubs: ['vh-icon', 'no-ssr', 'youtube'],
    });
    expect(wrapper.props().quality).toBe('hqdefault');
    expect(wrapper.props().id).toBe('');
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('renders modified VhVideo', () => {
    wrapper = shallowMount(VhVideo, {
      propsData: {
        id: 'Test ID',
        quality: 'mqdefault',
      },
      stubs: ['vh-icon', 'no-ssr', 'youtube'],
    });
    expect(wrapper.props().quality).toBe('mqdefault');
    expect(wrapper.props().id).toBe('Test ID');
    expect(wrapper).toMatchSnapshot();
  });
});
