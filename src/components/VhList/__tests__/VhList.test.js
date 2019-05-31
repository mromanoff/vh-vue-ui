import { shallowMount } from '@vue/test-utils';
import VhList from '../VhList.vue';

describe('VhList.vue', () => {
  let wrapper;

  it('renders default VhList', () => {
    wrapper = shallowMount(VhList);
    expect(wrapper.props().as).toBe('div');
    expect(wrapper.props().horizontal).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VhList ul', () => {
    wrapper = shallowMount(VhList, {
      propsData: {
        as: 'ul',
      },
    });
    expect(wrapper.props().as).toBe('ul');
    expect(wrapper.props().horizontal).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VhList ol ', () => {
    wrapper = shallowMount(VhList, {
      propsData: {
        as: 'ol',
        horizontal: true,
      },
    });
    expect(wrapper.props().as).toBe('ol');
    expect(wrapper.props().horizontal).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified VhList a', () => {
    wrapper = shallowMount(VhList, {
      propsData: {
        as: 'a',
      },
    });
    expect(wrapper.props().as).toBe('a');
    expect(wrapper.props().horizontal).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });
});
