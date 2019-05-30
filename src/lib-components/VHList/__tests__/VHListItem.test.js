import { shallowMount } from '@vue/test-utils';
import VHListItem from '../VHListItem.vue';

describe('VHListItem.vue', () => {
  let wrapper;

  it('renders default VHListItem', () => {
    wrapper = shallowMount(VHListItem);
    expect(wrapper.props().as).toBe('div');
    expect(wrapper.props().icon).toBe(null);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VHListItem li', () => {
    wrapper = shallowMount(VHListItem, {
      propsData: {
        as: 'li',
        icon: 'car',
      },
      stubs: ['vh-icon'],
    });
    expect(wrapper.props().as).toBe('li');
    expect(wrapper.props().icon).toBe('car');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VHListItem nav ', () => {
    wrapper = shallowMount(VHListItem, {
      propsData: {
        as: 'nav',
        icon: 'car',
      },
      stubs: ['vh-icon'],
    });
    expect(wrapper.props().as).toBe('nav');
    expect(wrapper.props().icon).toBe('car');
    expect(wrapper).toMatchSnapshot();
  });
});
