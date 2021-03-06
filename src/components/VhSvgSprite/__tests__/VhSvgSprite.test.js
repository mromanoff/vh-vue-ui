import { shallowMount } from '@vue/test-utils';
import VhSvgSprite from '../VhSvgSprite.vue';

describe('VhSvgSprite.vue', () => {
  const wrapper = shallowMount(VhSvgSprite);

  it('renders svg sprite', () => {
    expect(wrapper.is('svg')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
