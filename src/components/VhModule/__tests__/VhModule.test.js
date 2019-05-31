import { shallowMount } from '@vue/test-utils';
import VhModule from '../VhModule.vue';

describe('VhModule.vue', () => {
  let wrapper;

  it('renders default VhModule', () => {
    wrapper = shallowMount(VhModule);
    expect(wrapper.classes()).toContain('VhModule--medium');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders large VhModule', () => {
    wrapper = shallowMount(VhModule, {
      propsData: {
        size: 'large',
      },
    });
    expect(wrapper.classes()).toContain('VhModule--large');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders small VhModule', () => {
    wrapper = shallowMount(VhModule, {
      propsData: {
        size: 'small',
      },
    });
    expect(wrapper.classes()).toContain('VhModule--small');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders VhModule with anchor', () => {
    wrapper = shallowMount(VhModule, {
      propsData: {
        anchorId: 'testId',
      },
    });
    expect(wrapper.classes()).toContain('VhModule--anchor');
    expect(wrapper.attributes().id).toBe('testId');
    expect(wrapper).toMatchSnapshot();
  });
});
