import { shallowMount } from '@vue/test-utils';
import VHProgressDonut from '../VHProgressDonut.vue';

describe('VHProgressDonut.vue', () => {
  let wrapper;

  it('renders default VHProgressDonut', () => {
    wrapper = shallowMount(VHProgressDonut);
    expect(wrapper.props().color).toBe('green');
    expect(wrapper.props().size).toBe('medium');
    expect(wrapper.props().value).toBe(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VHProgressDonut blue large', () => {
    wrapper = shallowMount(VHProgressDonut, {
      propsData: {
        color: 'blue',
        size: 'large',
      },
    });
    expect(wrapper.props().color).toBe('blue');
    expect(wrapper.props().size).toBe('large');
    expect(wrapper.props().value).toBe(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VHProgressDonut green small', () => {
    wrapper = shallowMount(VHProgressDonut, {
      propsData: {
        color: 'green',
        size: 'small',
        value: 10,
      },
    });
    expect(wrapper.props().color).toBe('green');
    expect(wrapper.props().size).toBe('small');
    expect(wrapper.props().value).toBe(10);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VHProgressDonut blue small', () => {
    wrapper = shallowMount(VHProgressDonut, {
      propsData: {
        color: 'blue',
        size: 'medium',
        value: 1,
      },
    });
    expect(wrapper.props().color).toBe('blue');
    expect(wrapper.props().size).toBe('medium');
    expect(wrapper.props().value).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
