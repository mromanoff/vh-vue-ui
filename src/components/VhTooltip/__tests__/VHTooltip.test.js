import { shallowMount } from '@vue/test-utils';
import VhTooltip from '../VhTooltip.vue';

describe.skip('VhTooltip.vue', () => {
  let wrapper;

  it('renders default VhTooltip', () => {
    wrapper = shallowMount(VhTooltip, {
      stubs: ['vh-icon'],
    });
    expect(wrapper.classes()).toContain('VhTooltip');
    expect(wrapper).toMatchSnapshot();
  });
});
