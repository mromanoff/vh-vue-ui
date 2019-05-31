import { shallowMount } from '@vue/test-utils';
import VhGroup from '../VhGroup.vue';

describe('VhGroup.vue', () => {
  let wrapper;

  it('renders default VhGroup', () => {
    wrapper = shallowMount(VhGroup);
    expect(wrapper.props().itemsPerRow).toBe(null);
    expect(wrapper.props().itemsPerRowTablet).toBe(null);
    expect(wrapper.props().itemsPerRowMobile).toBe(null);
    expect(wrapper.props().itemsPerRowDesktop).toBe(null);
    expect(wrapper.props().spaceBetweenItems).toBe(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VhGroup', () => {
    wrapper = shallowMount(VhGroup, {
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
