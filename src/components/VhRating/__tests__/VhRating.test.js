import { shallowMount } from '@vue/test-utils';
import VhRating from '../VhRating.vue';

describe('VhRating.vue', () => {
  let wrapper;

  it('renders default VhRating', () => {
    wrapper = shallowMount(VhRating, {
      stubs: ['vh-icon'],
    });
    expect(wrapper.props().color).toBe('orange');
    expect(wrapper.props().hover).toBe(false);
    expect(wrapper.props().halfIncrements).toBe(false);
    expect(wrapper.props().icon).toBe('star');
    expect(wrapper.props().readonly).toBe(false);
    expect(wrapper.props().size).toBe('medium');
    expect(wrapper.props().value).toBe(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VhRating', () => {
    wrapper = shallowMount(VhRating, {
      propsData: {
        color: 'red',
        hover: true,
        halfIncrements: true,
        icon: 'circle',
        readonly: true,
        size: 'large',
        value: 5,
      },
      stubs: ['vh-icon'],
    });
    expect(wrapper.props().color).toBe('red');
    expect(wrapper.props().hover).toBe(true);
    expect(wrapper.props().halfIncrements).toBe(true);
    expect(wrapper.props().icon).toBe('circle');
    expect(wrapper.props().readonly).toBe(true);
    expect(wrapper.props().size).toBe('large');
    expect(wrapper.props().value).toBe(5);
    expect(wrapper).toMatchSnapshot();
  });
});
