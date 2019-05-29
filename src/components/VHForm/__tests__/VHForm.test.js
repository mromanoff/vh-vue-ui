import { shallowMount } from '@vue/test-utils';
import VHForm from '../VHForm.vue';

describe.skip('VHForm.vue', () => {
  let wrapper;

  it('renders default VHForm', () => {
    wrapper = shallowMount(VHForm);
    expect(wrapper.props().variant).toBe('normal');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders spaced VHForm', () => {
    wrapper = shallowMount(VHForm, {
      propsData: {
        variant: 'spaced',
      },
    });
    expect(wrapper.props().variant).toBe('spaced');
    expect(wrapper).toMatchSnapshot();
  });
});
