import { shallowMount } from '@vue/test-utils'
import Icon from '@/components/Icon.vue'

describe('Icon.vue', () => {
  it('return icon to render', () => {
    const icon = 'search'
    const wrapper = shallowMount(Icon, {
      props: { icon }
    })
    expect(wrapper.html().includes('<use xlink:href="#search">')).toBeTruthy();
  })
})