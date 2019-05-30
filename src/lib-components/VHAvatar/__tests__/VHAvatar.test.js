import { shallowMount } from '@vue/test-utils';
import VHAvatar from '../VHAvatar.vue';

describe('VHAvatar.vue', () => {
  let wrapper;

  it('renders default VHAvatar', () => {
    wrapper = shallowMount(VHAvatar);
    expect(wrapper.props().color).toBe('grey');
    expect(wrapper.props().size).toBe('medium');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders red avata size small', () => {
    wrapper = shallowMount(VHAvatar, {
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
    wrapper = shallowMount(VHAvatar, {
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
