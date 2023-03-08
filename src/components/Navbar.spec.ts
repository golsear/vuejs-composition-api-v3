import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { describe, it, expect } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'
import { routes } from '../router'
import Navbar from './Navbar.vue'

describe('Navbar', () => {
    it("renders", () => {
        const el = document.createElement('div')
        el.id = 'modal'
        document.body.appendChild(el)

        const pinia = createPinia()
        const router = createRouter({
            history: createMemoryHistory(),
            routes
        })

        mount(Navbar, {
            global: {
                plugins: [pinia, router]
            }
        })
    })
})  