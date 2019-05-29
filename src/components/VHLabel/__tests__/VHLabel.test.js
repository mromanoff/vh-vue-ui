import { shallowMount } from '@vue/test-utils';
import VHLabel from '../VHLabel.vue';

describe('VHLabel.vue', () => {
  let wrapper;

  // TEST functional component with passing props: https://vue-test-utils.vuejs.org/api/options.html#context

  beforeEach(() => {
    wrapper = shallowMount(VHLabel, {
      context: {
        props: { size: 'medium', color: 'grey' },
      },
      slots: {
        default: 'Test VHLabel',
      },
    });
  });

  it('renders default VHLabel', () => {
    expect(wrapper.isFunctionalComponent).toBe(true);
    expect(wrapper.is('div')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VHLabel', 'VHLabel--grey']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Green VHLabel', () => {
    wrapper = shallowMount(VHLabel, {
      context: {
        props: { color: 'green' },
      },
      slots: {
        default: 'Test Green VHLabel',
      },
    });
    expect(wrapper.classes()).toStrictEqual(['VHLabel', 'VHLabel--green']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Blue VHLabel', () => {
    wrapper = shallowMount(VHLabel, {
      context: {
        props: { color: 'blue' },
      },
      slots: {
        default: 'Test Blue VHLabel',
      },
    });
    expect(wrapper.classes()).toStrictEqual(['VHLabel', 'VHLabel--blue']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Black VHLabel', () => {
    wrapper = shallowMount(VHLabel, {
      context: {
        props: { color: 'black' },
      },
      slots: {
        default: 'Test Black VHLabel',
      },
    });
    expect(wrapper.classes()).toStrictEqual(['VHLabel', 'VHLabel--black']);
    expect(wrapper).toMatchSnapshot();
  });
});
