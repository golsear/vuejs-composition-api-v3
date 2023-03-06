import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import FormInput from './FormInput.vue'

describe('FormInput', () => {
    it("renders some erros", () => {
        const wrapper = mount(FormInput, {
            props: {
                name: 'foo',
                modelValue: 'bar',
                status: {
                    valid: false,
                    message: 'error'
                },
                type: 'input'
            }
        })

        expect(wrapper.find('.is-danger').exists()).toBe(true)
    })

    it("renders no erros", () => {
        const wrapper = mount(FormInput, {
            props: {
                name: 'foo',
                modelValue: 'bar',
                status: {
                    valid: true,
                    message: 'error'
                },
                type: 'input'
            }
        })

        expect(wrapper.find('.is-danger').exists()).toBe(false)
    })
})