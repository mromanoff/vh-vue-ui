import { shallowMount } from '@vue/test-utils';
import VHLogoMini from '../VHLogoMini.vue';

describe('VHLogoMini.vue', () => {
  let wrapper;

  it('renders default VHLogoMini', () => {
    wrapper = shallowMount(VHLogoMini);

    expect(wrapper).toMatchSnapshot();
  });
});
