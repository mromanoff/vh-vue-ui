import { shallowMount } from '@vue/test-utils';
import VHTooltip from '../VHTooltip.vue';

describe.skip('VHTooltip.vue', () => {
  let wrapper;

  it('renders default VHTooltip', () => {
    wrapper = shallowMount(VHTooltip, {
      stubs: ['vh-icon'],
    });
    expect(wrapper.classes()).toContain('VHTooltip');
    expect(wrapper).toMatchSnapshot();
  });
});
