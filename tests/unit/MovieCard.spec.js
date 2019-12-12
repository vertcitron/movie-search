import { shallowMount } from '@vue/test-utils'
import MovieCard from '@/components/MovieCard.vue'

describe('MovieCard.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
