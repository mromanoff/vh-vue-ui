import { shallowMount } from '@vue/test-utils';
import VhFormField from '../VhFormField.vue';

describe('VhFormField.vue', () => {
  let wrapper;

  it('renders default VhFormField', () => {
    wrapper = shallowMount(VhFormField);
    expect(wrapper.props().state).toBe(null);
    expect(wrapper.props().message).toBe(null);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders FormField with state and message', () => {
    wrapper = shallowMount(VhFormField, {
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
