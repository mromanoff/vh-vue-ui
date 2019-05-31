import { shallowMount } from '@vue/test-utils';
import VhLogo from '../VhLogo.vue';

describe('VhLogo.vue', () => {
  let wrapper;

  it('renders default VhLogo', () => {
    wrapper = shallowMount(VhLogo);

    expect(wrapper).toMatchSnapshot();
  });
});
