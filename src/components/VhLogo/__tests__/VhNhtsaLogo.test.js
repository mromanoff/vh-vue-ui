import { shallowMount } from '@vue/test-utils';
import VhNhtsaLogo from '../VhNhtsaLogo.vue';

describe('VhNhtsaLogo.vue', () => {
  let wrapper;

  it('renders default VhNhtsaLogo', () => {
    wrapper = shallowMount(VhNhtsaLogo);

    expect(wrapper).toMatchSnapshot();
  });
});
