import { shallowMount } from '@vue/test-utils';
import VhHeroButton from '../VhHeroButton.vue';

describe('VhHeroButton.vue', () => {
  it('renders default button', () => {
    const wrapper = shallowMount(VhHeroButton);
    expect(wrapper.findAll('.VhHeroButton')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});

it('renders disabled button', () => {
  const wrapper = shallowMount(VhHeroButton, {
    propsData: {
      disabled: true,
    },
  });
  expect(wrapper.findAll('[disabled]')).toHaveLength(1);
  expect(wrapper).toMatchSnapshot();
});
