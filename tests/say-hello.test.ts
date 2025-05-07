import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import SayHello from '../src/say-hello/SayHello.vue'

describe('test for SayHello.vue', () => {
  it('renders a button', () => {
    const wrapper = mount(SayHello, {
      props: {
        name: 'World',
      },
    })
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('calls sayHello method when button is clicked', async () => {
    const wrapper = mount(SayHello, {
      props: {
        name: 'World',
      },
    })
    window.alert = vi.fn()
    await wrapper.find('button').trigger('click')
    expect(window.alert).toHaveBeenCalledWith('Hello, World!')
  })
})
