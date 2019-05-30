import { shallowMount } from '@vue/test-utils';
import VHCard from '../VHCard.vue';

describe('VHCard.vue', () => {
  let wrapper;

  it('renders default VHCard', () => {
    wrapper = shallowMount(VHCard);
    expect(wrapper.props().block).toBe(false);
    expect(wrapper.props().color).toBe(null);
    expect(wrapper.props().horizontal).toBe(false);
    expect(wrapper.props().hover).toBe(false);
    expect(wrapper.props().nuxt).toBe(false);
    expect(wrapper.props().padded).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders red header background', () => {
    wrapper = shallowMount(VHCard, {
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
    wrapper = shallowMount(VHCard, {
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
