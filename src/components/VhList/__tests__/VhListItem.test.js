import { shallowMount } from '@vue/test-utils';
import VhListItem from '../VhListItem.vue';

describe('VhListItem.vue', () => {
  let wrapper;

  it('renders default VhListItem', () => {
    wrapper = shallowMount(VhListItem);
    expect(wrapper.props().as).toBe('div');
    expect(wrapper.props().icon).toBe(null);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VhListItem li', () => {
    wrapper = shallowMount(VhListItem, {
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

  it('renders modified VhListItem nav ', () => {
    wrapper = shallowMount(VhListItem, {
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
