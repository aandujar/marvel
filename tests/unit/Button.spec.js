import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('Button.vue emitt event on click', () => {
  it('button emit event on click', () => {
    const wrapper = shallowMount(Button)
    expect(wrapper.text()).toBe('Ver detalles')
  })
})

describe('Button.vue emitt event on click', () => {
  it('button emit event on click', async () => {
    const wrapper = shallowMount(Button)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('clicked')
  })
})