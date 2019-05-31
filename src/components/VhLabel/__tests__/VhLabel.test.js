import { shallowMount } from '@vue/test-utils';
import VhLabel from '../VhLabel.vue';

describe('VhLabel.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(VhLabel, {
      propsData: {
        color: 'grey',
      },
      slots: {
        default: 'Test VhLabel',
      },
    });
  });

  it('renders default VhLabel', () => {
    expect(wrapper.is('div')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VhLabel', 'VhLabel--grey']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Green VhLabel', () => {
    wrapper = shallowMount(VhLabel, {
      propsData: {
        color: 'green',
      },
      slots: {
        default: 'Test Green VhLabel',
      },
    });
    expect(wrapper.classes()).toStrictEqual(['VhLabel', 'VhLabel--green']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Blue VhLabel', () => {
    wrapper = shallowMount(VhLabel, {
      propsData: {
        color: 'blue',
      },
      slots: {
        default: 'Test Blue VhLabel',
      },
    });
    expect(wrapper.classes()).toStrictEqual(['VhLabel', 'VhLabel--blue']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Black VhLabel', () => {
    wrapper = shallowMount(VhLabel, {
      propsData: {
        color: 'black',
      },
      slots: {
        default: 'Test Black VhLabel',
      },
    });
    expect(wrapper.classes()).toStrictEqual(['VhLabel', 'VhLabel--black']);
    expect(wrapper).toMatchSnapshot();
  });
});
