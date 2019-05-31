import { shallowMount } from '@vue/test-utils';
import VhBadge from '../VhBadge.vue';

describe('VhBadge.vue', () => {
  let wrapper;

  it('renders default VhBadge', () => {
    wrapper = shallowMount(VhBadge);
    expect(wrapper.props().color).toBe('blue');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders white VhBadge', () => {
    wrapper = shallowMount(VhBadge, {
      propsData: {
        color: 'white',
      },
    });
    expect(wrapper.props().color).toBe('white');
    expect(wrapper).toMatchSnapshot();
  });
});
