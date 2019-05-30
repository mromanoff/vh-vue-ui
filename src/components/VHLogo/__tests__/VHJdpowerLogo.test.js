import { shallowMount } from '@vue/test-utils';
import VHJdpowerLogo from '../VHJdpowerLogo.vue';

describe('VHJdpowerLogo.vue', () => {
  let wrapper;

  it('renders default VHJdpowerLogo', () => {
    wrapper = shallowMount(VHJdpowerLogo);

    expect(wrapper).toMatchSnapshot();
  });
});
