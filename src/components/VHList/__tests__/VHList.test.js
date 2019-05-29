import { shallowMount } from '@vue/test-utils';
import VHList from '../VHList.vue';

describe('VHList.vue', () => {
  let wrapper;

  it('renders default VHList', () => {
    wrapper = shallowMount(VHList);
    expect(wrapper.props().as).toBe('div');
    expect(wrapper.props().horizontal).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VHList ul', () => {
    wrapper = shallowMount(VHList, {
      propsData: {
        as: 'ul',
      },
    });
    expect(wrapper.props().as).toBe('ul');
    expect(wrapper.props().horizontal).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VHList ol ', () => {
    wrapper = shallowMount(VHList, {
      propsData: {
        as: 'ol',
        horizontal: true,
      },
    });
    expect(wrapper.props().as).toBe('ol');
    expect(wrapper.props().horizontal).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VHList a', () => {
    wrapper = shallowMount(VHList, {
      propsData: {
        as: 'a',
      },
    });
    expect(wrapper.props().as).toBe('a');
    expect(wrapper.props().horizontal).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });
});
