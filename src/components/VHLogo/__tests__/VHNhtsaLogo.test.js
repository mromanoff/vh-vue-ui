import { shallowMount } from '@vue/test-utils';
import VHNhtsaLogo from '../VHNhtsaLogo.vue';

describe('VHNhtsaLogo.vue', () => {
  let wrapper;

  it('renders default VHNhtsaLogo', () => {
    wrapper = shallowMount(VHNhtsaLogo);

    expect(wrapper).toMatchSnapshot();
  });
});
