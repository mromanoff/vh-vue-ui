import { shallowMount } from '@vue/test-utils';
import VHVideo from '../VHVideo.vue';

describe('VHVideo.vue', () => {
  let wrapper;

  it.skip('renders default VHVideo', () => {
    wrapper = shallowMount(VHVideo, {
      stubs: ['vh-icon', 'no-ssr', 'youtube'],
    });
    expect(wrapper.props().quality).toBe('hqdefault');
    expect(wrapper.props().id).toBe('');
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('renders modified VHVideo', () => {
    wrapper = shallowMount(VHVideo, {
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
