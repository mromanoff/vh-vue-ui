import { shallowMount } from '@vue/test-utils';
import VHContainer from '../VHContainer.vue';

describe('VHContainer.vue', () => {
  let wrapper;

  it('renders default VHContainer', () => {
    wrapper = shallowMount(VHContainer);

    expect(wrapper).toMatchSnapshot();
  });
});
