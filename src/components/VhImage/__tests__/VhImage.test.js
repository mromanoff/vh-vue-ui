import { shallowMount } from '@vue/test-utils';
import VhImage from '../VhImage.vue';

describe('VhImage.vue', () => {
  let wrapper;

  it('renders default VhImage', () => {
    wrapper = shallowMount(VhImage, {
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

  it('renders modified VhImage', () => {
    wrapper = shallowMount(VhImage, {
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
