import { shallowMount } from '@vue/test-utils';
import VHModule from '../VHModule.vue';

describe('VHModule.vue', () => {
  let wrapper;

  it('renders default VHModule', () => {
    wrapper = shallowMount(VHModule);
    expect(wrapper.classes()).toContain('VHModule--medium');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders large VHModule', () => {
    wrapper = shallowMount(VHModule, {
      propsData: {
        size: 'large',
      },
    });
    expect(wrapper.classes()).toContain('VHModule--large');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders small VHModule', () => {
    wrapper = shallowMount(VHModule, {
      propsData: {
        size: 'small',
      },
    });
    expect(wrapper.classes()).toContain('VHModule--small');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders VHModule with anchor', () => {
    wrapper = shallowMount(VHModule, {
      propsData: {
        anchorId: 'testId',
      },
    });
    expect(wrapper.classes()).toContain('VHModule--anchor');
    expect(wrapper.attributes().id).toBe('testId');
    expect(wrapper).toMatchSnapshot();
  });
});
