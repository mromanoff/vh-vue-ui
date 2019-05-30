import { shallowMount } from '@vue/test-utils';
import VHKbbLogo from '../VHKbbLogo.vue';

describe('VHKbbLogo.vue', () => {
  let wrapper;

  it('renders default VHKbbLogo', () => {
    wrapper = shallowMount(VHKbbLogo);

    expect(wrapper).toMatchSnapshot();
  });
});
