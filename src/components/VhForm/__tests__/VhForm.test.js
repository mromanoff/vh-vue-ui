import { shallowMount } from '@vue/test-utils';
import VhForm from '../VhForm.vue';

describe.skip('VhForm.vue', () => {
  let wrapper;

  it('renders default VhForm', () => {
    wrapper = shallowMount(VhForm);
    expect(wrapper.props().variant).toBe('normal');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders spaced VhForm', () => {
    wrapper = shallowMount(VhForm, {
      propsData: {
        variant: 'spaced',
      },
    });
    expect(wrapper.props().variant).toBe('spaced');
    expect(wrapper).toMatchSnapshot();
  });
});
