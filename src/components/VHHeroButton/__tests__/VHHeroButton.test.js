import { shallowMount } from '@vue/test-utils';
import VHHeroButton from '../VHHeroButton.vue';

describe('VHHeroButton.vue', () => {
  it('renders default button', () => {
    const wrapper = shallowMount(VHHeroButton);
    expect(wrapper.findAll('.VHHeroButton')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});

it('renders disabled button', () => {
  const wrapper = shallowMount(VHHeroButton, {
    propsData: {
      disabled: true,
    },
  });
  expect(wrapper.findAll('[disabled]')).toHaveLength(1);
  expect(wrapper).toMatchSnapshot();
});
