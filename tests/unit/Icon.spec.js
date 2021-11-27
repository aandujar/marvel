import { shallowMount } from '@vue/test-utils'
import Icon from '@/components/Icon.vue'

describe('Icon.vue', () => {
  it('return icon to render', () => {
    const type = 'search'
    const wrapper = shallowMount(Icon, {
      props: { type }
    })
    expect(wrapper.html().includes('<svg-icon')).toBeTruthy();
  })
})