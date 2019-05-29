import { shallowMount } from '@vue/test-utils';
import VHFormField from '../VHFormField.vue';

describe('VHFormField.vue', () => {
  let wrapper;

  it('renders default VHFormField', () => {
    wrapper = shallowMount(VHFormField);
    expect(wrapper.props().state).toBe(null);
    expect(wrapper.props().message).toBe(null);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders FormField with state and message', () => {
    wrapper = shallowMount(VHFormField, {
      propsData: {
        state: 'test state',
        message: 'this is a test message',
      },
    });
    expect(wrapper.props().state).toBe('test state');
    expect(wrapper.props().message).toBe('this is a test message');
    expect(wrapper).toMatchSnapshot();
  });
});
