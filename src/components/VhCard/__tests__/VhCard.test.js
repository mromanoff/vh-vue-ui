import { shallowMount } from '@vue/test-utils';
import VhCard from '../VhCard.vue';

describe('VhCard.vue', () => {
  let wrapper;

  it('renders default VhCard', () => {
    wrapper = shallowMount(VhCard);
    expect(wrapper.props().block).toBe(false);
    expect(wrapper.props().color).toBe(null);
    expect(wrapper.props().horizontal).toBe(false);
    expect(wrapper.props().hover).toBe(false);
    expect(wrapper.props().nuxt).toBe(false);
    expect(wrapper.props().padded).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders red header background', () => {
    wrapper = shallowMount(VhCard, {
      propsData: {
        color: 'red',
      },
    });
    expect(wrapper.props().block).toBe(false);
    expect(wrapper.props().color).toBe('red');
    expect(wrapper.props().horizontal).toBe(false);
    expect(wrapper.props().hover).toBe(false);
    expect(wrapper.props().nuxt).toBe(false);
    expect(wrapper.props().padded).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders blue header background', () => {
    wrapper = shallowMount(VhCard, {
      propsData: {
        color: 'blue',
        block: true,
      },
    });
    expect(wrapper.props().block).not.toBe(false);
    expect(wrapper.props().color).toBe('blue');
    expect(wrapper.props().horizontal).toBe(false);
    expect(wrapper.props().hover).toBe(false);
    expect(wrapper.props().nuxt).toBe(false);
    expect(wrapper.props().padded).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });
});
