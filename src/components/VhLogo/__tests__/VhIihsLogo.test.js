import { shallowMount } from '@vue/test-utils';
import VhIihsLogo from '../VhIihsLogo.vue';

describe('VhIihsLogo.vue', () => {
  let wrapper;

  it('renders default VhIihsLogo', () => {
    wrapper = shallowMount(VhIihsLogo);

    expect(wrapper).toMatchSnapshot();
  });
});
