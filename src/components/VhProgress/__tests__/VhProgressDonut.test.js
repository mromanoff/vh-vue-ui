import { shallowMount } from '@vue/test-utils';
import VhProgressDonut from '../VhProgressDonut.vue';

describe('VhProgressDonut.vue', () => {
  let wrapper;

  it('renders default VhProgressDonut', () => {
    wrapper = shallowMount(VhProgressDonut);
    expect(wrapper.props().color).toBe('green');
    expect(wrapper.props().size).toBe('medium');
    expect(wrapper.props().value).toBe(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VhProgressDonut blue large', () => {
    wrapper = shallowMount(VhProgressDonut, {
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

  it('renders modified VhProgressDonut green small', () => {
    wrapper = shallowMount(VhProgressDonut, {
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

  it('renders modified VhProgressDonut blue small', () => {
    wrapper = shallowMount(VhProgressDonut, {
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
