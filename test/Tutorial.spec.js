import { shallowMount } from '@vue/test-utils'
import Tutorial from '@/components/Tutorial.vue'

describe('Tutorial', () => {
  test('method', () => {
    const wrapper = shallowMount(Tutorial)
    console.log = jest.fn()
    wrapper.vm.onClick()
    expect(console.log).toHaveBeenCalledWith(wrapper.vm.value)
  })
})
