import { shallowMount } from '@vue/test-utils';
import VHBadge from '../VHBadge.vue';

describe('VHBadge.vue', () => {
  let wrapper;

  it('renders default VHBadge', () => {
    wrapper = shallowMount(VHBadge);
    expect(wrapper.props().color).toBe('blue');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders white VHBadge', () => {
    wrapper = shallowMount(VHBadge, {
      propsData: {
        color: 'white',
      },
    });
    expect(wrapper.props().color).toBe('white');
    expect(wrapper).toMatchSnapshot();
  });
});
