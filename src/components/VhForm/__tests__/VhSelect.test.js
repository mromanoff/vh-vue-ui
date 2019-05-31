import { shallowMount } from '@vue/test-utils';
import VhSelect from '../VhSelect.vue';

describe('VhSelect.vue', () => {
  let wrapper;

  it('renders default VhSelect', () => {
    wrapper = shallowMount(VhSelect, {
      propsData: {
        name: 'Test Name',
        label: 'Test Label',
        options: [],
      },
    });
    expect(wrapper.props().label).toBe('Test Label');
    expect(wrapper.props().labelHidden).toBe(false);
    expect(wrapper.props().name).toBe('Test Name');
    expect(wrapper.props().value).toBe('');
    expect(wrapper.props().options).toEqual([]);
    expect(wrapper.props().disabled).toBe(false);
    expect(wrapper.props().state).toBe('pristine');
    expect(wrapper.props().message).toBe('');
    expect(wrapper.props().size).toBe('medium');
    expect(wrapper.props().theme).toBe('light');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VhSelect', () => {
    wrapper = shallowMount(VhSelect, {
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
      },
    });
    expect(wrapper.props().label).toBe('Test Label');
    expect(wrapper.props().labelHidden).toBe(true);
    expect(wrapper.props().name).toBe('Test Name');
    expect(wrapper.props().value).toBe('any');
    expect(wrapper.props().options).toEqual(['stateItem']);
    expect(wrapper.props().disabled).toBe(true);
    expect(wrapper.props().state).toBe('dirty');
    expect(wrapper.props().message).toBe('This is a test');
    expect(wrapper.props().size).toBe('large');
    expect(wrapper.props().theme).toBe('dark');
    expect(wrapper).toMatchSnapshot();
  });
});
