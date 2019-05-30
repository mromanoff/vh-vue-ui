import { shallowMount } from '@vue/test-utils';
import VHProgressBar from '../VHProgressBar.vue';

describe('VHProgressBar.vue', () => {
  let wrapper;

  it('renders default VHProgressBar', () => {
    wrapper = shallowMount(VHProgressBar);
    expect(wrapper.props().color).toBe('orange');
    expect(wrapper.props().size).toBe('medium');
    expect(wrapper.props().value).toBe(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VHProgressBar blue large', () => {
    wrapper = shallowMount(VHProgressBar, {
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

  it('renders modified VHProgressBar green small', () => {
    wrapper = shallowMount(VHProgressBar, {
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

  it('renders modified VHProgressBar blue small', () => {
    wrapper = shallowMount(VHProgressBar, {
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
