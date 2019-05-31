import { shallowMount } from '@vue/test-utils';
import VhContainer from '../VhContainer.vue';

describe('VhContainer.vue', () => {
  let wrapper;

  it('renders default VhContainer', () => {
    wrapper = shallowMount(VhContainer);

    expect(wrapper).toMatchSnapshot();
  });
});
