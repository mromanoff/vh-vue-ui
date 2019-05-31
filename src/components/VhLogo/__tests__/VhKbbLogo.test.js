import { shallowMount } from '@vue/test-utils';
import VhKbbLogo from '../VhKbbLogo.vue';

describe('VhKbbLogo.vue', () => {
  let wrapper;

  it('renders default VhKbbLogo', () => {
    wrapper = shallowMount(VhKbbLogo);

    expect(wrapper).toMatchSnapshot();
  });
});
