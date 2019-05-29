import { shallowMount } from '@vue/test-utils';
import VHLogo from '../VHLogo.vue';

describe('VHLogo.vue', () => {
  let wrapper;

  it('renders default VHLogo', () => {
    wrapper = shallowMount(VHLogo);

    expect(wrapper).toMatchSnapshot();
  });
});
