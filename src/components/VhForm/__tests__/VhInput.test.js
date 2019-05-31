import { shallowMount } from '@vue/test-utils';
import VhInput from '../VhInput.vue';

describe('VhInput.vue', () => {
  let wrapper;

  it('renders default VhInput', () => {
    wrapper = shallowMount(VhInput, {
      propsData: {
        name: 'Test Name',
        label: 'Test Label',
      },
    });
    expect(wrapper.props().label).toBe('Test Label');
    expect(wrapper.props().labelHidden).toBe(false);
    expect(wrapper.props().name).toBe('Test Name');
    expect(wrapper.props().value).toBe('');
    expect(wrapper.props().disabled).toBe(false);
    expect(wrapper.props().state).toBe('pristine');
    expect(wrapper.props().message).toBe('');
    expect(wrapper.props().size).toBe('medium');
    expect(wrapper.props().theme).toBe('light');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VhInput', () => {
    wrapper = shallowMount(VhInput, {
      propsData: {
        name: 'Test Name',
        label: 'Test Label',
        labelHidden: true,
        value: 'any',
        disabled: true,
        state: 'dirty',
        size: 'large',
        theme: 'dark',
        message: 'This is a test',
      },
    });
    expect(wrapper.props().label).toBe('Test Label');
    expect(wrapper.props().labelHidden).toBe(true);
    expect(wrapper.props().name).toBe('Test Name');
    expect(wrapper.props().value).toBe('any');
    expect(wrapper.props().disabled).toBe(true);
    expect(wrapper.props().state).toBe('dirty');
    expect(wrapper.props().message).toBe('This is a test');
    expect(wrapper.props().size).toBe('large');
    expect(wrapper.props().theme).toBe('dark');
    expect(wrapper).toMatchSnapshot();
  });
});
