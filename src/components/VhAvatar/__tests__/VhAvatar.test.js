import { shallowMount } from '@vue/test-utils';
import VhAvatar from '../VhAvatar.vue';

describe('VhAvatar.vue', () => {
  let wrapper;

  it('renders default VhAvatar', () => {
    wrapper = shallowMount(VhAvatar);
    expect(wrapper.props().color).toBe('grey');
    expect(wrapper.props().size).toBe('medium');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders red avata size small', () => {
    wrapper = shallowMount(VhAvatar, {
      propsData: {
        color: 'red',
        size: 'small',
      },
    });
    expect(wrapper.props().color).toBe('red');
    expect(wrapper.props().size).toBe('small');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders black avatar size large', () => {
    wrapper = shallowMount(VhAvatar, {
      propsData: {
        color: 'blue',
        size: 'large',
      },
    });
    expect(wrapper.props().color).toBe('blue');
    expect(wrapper.props().size).toBe('large');
    expect(wrapper).toMatchSnapshot();
  });
});
