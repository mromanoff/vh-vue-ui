import { shallowMount } from '@vue/test-utils';
import VHImage from '../VHImage.vue';

describe('VHImage.vue', () => {
  let wrapper;

  it('renders default VHImage', () => {
    wrapper = shallowMount(VHImage, {
      propsData: {
        src: 'http:testdomain.vehiclehistory.image',
        alt: 'dummy url image',
      },
    });
    expect(wrapper.props().src).toBe('http:testdomain.vehiclehistory.image');
    expect(wrapper.props().alt).toBe('dummy url image');
    expect(wrapper.props().padded).toBe(false);
    expect(wrapper.props().width).toBe(null);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VHImage', () => {
    wrapper = shallowMount(VHImage, {
      propsData: {
        src: 'http:testdomain.vehiclehistory.image',
        alt: 'dummy url image',
        padded: true,
        width: 100,
      },
    });
    expect(wrapper.props().src).toBe('http:testdomain.vehiclehistory.image');
    expect(wrapper.props().alt).toBe('dummy url image');
    expect(wrapper.props().padded).toBe(true);
    expect(wrapper.props().width).toBe(100);
    expect(wrapper).toMatchSnapshot();
  });
});
