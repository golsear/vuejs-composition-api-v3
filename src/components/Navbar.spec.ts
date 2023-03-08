import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { describe, it, expect } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'
import { routes } from '../router'
import { useUsers } from '../stores/users'
import Navbar from './Navbar.vue'

describe('Navbar', () => {
    it("renders signin and signup buttons when not authenticated", () => {
        const el = document.createElement('div')
        el.id = 'modal'
        document.body.appendChild(el)

        const pinia = createPinia()
        const router = createRouter({
            history: createMemoryHistory(),
            routes
        })

        const wrapper = mount(Navbar, {
            global: {
                plugins: [pinia, router]
            }
        })

        expect(wrapper.find('#sign-up').exists()).toBe(true)
        expect(wrapper.find('[data-testid=sign-in]').exists()).toBe(true)
    })

    it.only("renders new post and logout when authenticated", () => {
        const el = document.createElement('div')
        el.id = 'modal'
        document.body.appendChild(el)

        const pinia = createPinia()
        setActivePinia(pinia)
        const users = useUsers()
        users.currentUserId = "1"
        const router = createRouter({
            history: createMemoryHistory(),
            routes
        })

        const wrapper = mount(Navbar, {
            global: {
                plugins: [pinia, router]
            }
        })

        console.log(wrapper.html())

        expect(wrapper.find('a').text()).toBe('New Post')
        expect(wrapper.find('button').text()).toBe('Log Out')
    })
})  