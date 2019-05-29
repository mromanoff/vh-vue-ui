import { shallowMount } from '@vue/test-utils';
import VHGroup from '../VHGroup.vue';

describe('VHGroup.vue', () => {
  let wrapper;

  it('renders default VHGroup', () => {
    wrapper = shallowMount(VHGroup);
    expect(wrapper.props().itemsPerRow).toBe(null);
    expect(wrapper.props().itemsPerRowTablet).toBe(null);
    expect(wrapper.props().itemsPerRowMobile).toBe(null);
    expect(wrapper.props().itemsPerRowDesktop).toBe(null);
    expect(wrapper.props().spaceBetweenItems).toBe(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VHGroup', () => {
    wrapper = shallowMount(VHGroup, {
      propsData: {
        itemsPerRow: 4,
        itemsPerRowTablet: 4,
        itemsPerRowMobile: 2,
        itemsPerRowDesktop: 4,
        spaceBetweenItems: 2,
      },
    });
    expect(wrapper.props().itemsPerRow).toBe(4);
    expect(wrapper.props().itemsPerRowTablet).toBe(4);
    expect(wrapper.props().itemsPerRowMobile).toBe(2);
    expect(wrapper.props().itemsPerRowDesktop).toBe(4);
    expect(wrapper.props().spaceBetweenItems).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});
