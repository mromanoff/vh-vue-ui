import { shallowMount } from '@vue/test-utils';
import VHIihsLogo from '../VHIihsLogo.vue';

describe('VHIihsLogo.vue', () => {
  let wrapper;

  it('renders default VHIihsLogo', () => {
    wrapper = shallowMount(VHIihsLogo);

    expect(wrapper).toMatchSnapshot();
  });
});
