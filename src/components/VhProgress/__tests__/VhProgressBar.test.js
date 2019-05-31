import { shallowMount } from '@vue/test-utils';
import VhProgressBar from '../VhProgressBar.vue';

describe('VhProgressBar.vue', () => {
  let wrapper;

  it('renders default VhProgressBar', () => {
    wrapper = shallowMount(VhProgressBar);
    expect(wrapper.props().color).toBe('orange');
    expect(wrapper.props().size).toBe('medium');
    expect(wrapper.props().value).toBe(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VhProgressBar blue large', () => {
    wrapper = shallowMount(VhProgressBar, {
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

  it('renders modified VhProgressBar green small', () => {
    wrapper = shallowMount(VhProgressBar, {
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

  it('renders modified VhProgressBar blue small', () => {
    wrapper = shallowMount(VhProgressBar, {
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
