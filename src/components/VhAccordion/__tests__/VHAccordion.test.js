import { shallowMount } from '@vue/test-utils';
import VHAccordion from '../VHAccordion.vue';

describe('VHAccordion.vue', () => {
  let wrapper;

  it('renders default accordion', () => {
    wrapper = shallowMount(VHAccordion);
    expect(wrapper.props().expandMode).toBe('single');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders single accordion', () => {
    wrapper = shallowMount(VHAccordion, {
      propsData: {
        expandMode: 'single',
      },
    });
    wrapper.element.setAttribute('expandMode', 'single');
    expect(wrapper.props().expandMode).toBe('single');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders multiple accordion', () => {
    wrapper = shallowMount(VHAccordion, {
      propsData: {
        expandMode: 'multiple',
      },
    });
    wrapper.element.setAttribute('expandMode', 'single');
    expect(wrapper.props().expandMode).toBe('multiple');
    expect(wrapper).toMatchSnapshot();
  });
});
