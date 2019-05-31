import { shallowMount } from '@vue/test-utils';
import VhLogoMini from '../VhLogoMini.vue';

describe('VhLogoMini.vue', () => {
  let wrapper;

  it('renders default VhLogoMini', () => {
    wrapper = shallowMount(VhLogoMini);

    expect(wrapper).toMatchSnapshot();
  });
});
