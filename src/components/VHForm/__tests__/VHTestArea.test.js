import { shallowMount } from '@vue/test-utils';
import VHTextArea from '../VHTextArea.vue';

describe('VHTextArea.vue', () => {
  let wrapper;

  it('renders default VHTextArea', () => {
    wrapper = shallowMount(VHTextArea, {
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
    expect(wrapper.props().cols).toBe(30);
    expect(wrapper.props().rows).toBe(4);
    expect(wrapper.props().size).toBe('medium');
    expect(wrapper.props().state).toBe('pristine');
    expect(wrapper.props().message).toBe('');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VHTextArea', () => {
    wrapper = shallowMount(VHTextArea, {
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
        options: ['stateItem'],
        cols: 40,
        rows: 10,
      },
    });
    expect(wrapper.props().label).toBe('Test Label');
    expect(wrapper.props().labelHidden).toBe(true);
    expect(wrapper.props().name).toBe('Test Name');
    expect(wrapper.props().value).toBe('any');
    expect(wrapper.props().disabled).toBe(true);
    expect(wrapper.props().cols).toBe(40);
    expect(wrapper.props().rows).toBe(10);
    expect(wrapper.props().size).toBe('large');
    expect(wrapper.props().state).toBe('dirty');
    expect(wrapper.props().message).toBe('This is a test');
    expect(wrapper).toMatchSnapshot();
  });
});
