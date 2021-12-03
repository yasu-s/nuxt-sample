<script lang="ts">
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
    wrapper.vm.hoge()
    expect(wrapper.vm.hoge).toBeTruthy()
  })
})
</script>
