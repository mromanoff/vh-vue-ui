import { shallowMount } from '@vue/test-utils';
import VhAccordion from '../VhAccordion.vue';

describe('VhAccordion.vue', () => {
  let wrapper;

  it('renders default accordion', () => {
    wrapper = shallowMount(VhAccordion);
    expect(wrapper.props().expandMode).toBe('single');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders single accordion', () => {
    wrapper = shallowMount(VhAccordion, {
      propsData: {
        expandMode: 'single',
      },
    });
    wrapper.element.setAttribute('expandMode', 'single');
    expect(wrapper.props().expandMode).toBe('single');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders multiple accordion', () => {
    wrapper = shallowMount(VhAccordion, {
      propsData: {
        expandMode: 'multiple',
      },
    });
    wrapper.element.setAttribute('expandMode', 'single');
    expect(wrapper.props().expandMode).toBe('multiple');
    expect(wrapper).toMatchSnapshot();
  });
});
