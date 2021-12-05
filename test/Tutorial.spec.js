import { shallowMount } from '@vue/test-utils'
import Tutorial from '@/components/Tutorial.vue'

describe('Tutorial', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Tutorial)
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.vm.value).toBe('hoge')
  })

  test('method', () => {
    const wrapper = shallowMount(Tutorial)
    console.log = jest.fn()
    wrapper.vm.onClick()
    expect(console.log).toHaveBeenCalledWith(wrapper.vm.value)
  })
})
