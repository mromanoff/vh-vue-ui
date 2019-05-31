import { shallowMount } from '@vue/test-utils';
import VhJdpowerLogo from '../VhJdpowerLogo.vue';

describe('VhJdpowerLogo.vue', () => {
  let wrapper;

  it('renders default VhJdpowerLogo', () => {
    wrapper = shallowMount(VhJdpowerLogo);

    expect(wrapper).toMatchSnapshot();
  });
});
