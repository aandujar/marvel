import { shallowMount, mount } from '@vue/test-utils'
import Textfield from '@/components/Textfield.vue'

describe('Textfield.vue emit when click on search icon', () => {
  it('icon emit event on click', async () => {
    const wrapper = mount(Textfield);
    await wrapper.find('svg').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('name');
  })
})

describe('Textfield.vue emit when press keyup.enter and has value', () => {
  it('button emit event on press keyup.enter', async () => {
    const wrapper = shallowMount(Textfield);
    const input = await wrapper.find('input');
    input.setValue('Texto de prueba');
    input.trigger('keyup.enter');
    expect(wrapper.emitted().name[0]).toContain('Texto de prueba')
  })
})

describe('Textfield.vue label is not shown if no value', () => {
    it('no shows label if no has value', async () => {
      const wrapper = shallowMount(Textfield);
      const label = await wrapper.find('label');
      expect(label.attributes().style).toContain('display: none')
    })
  })

  describe('Textfield.vue label is shown if has value', () => {
    it('shows label when has value', async () => {
      const wrapper = shallowMount(Textfield);
      const input = await wrapper.find('input');
      input.setValue('Texto de prueba');
      await wrapper.vm.$nextTick();
      const label = await wrapper.find('label');
      const labelStyle = label.attributes().style ? label.attributes().style : [];
      expect(labelStyle.includes('display: none')).toBe(false);
    })
  })