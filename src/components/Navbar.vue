
<script lang="ts" setup>
import { useModal } from '../composables/modal'
import { useUsers } from '../stores/users'
import SignupForm from './SignupForm.vue'

const modal = useModal()
const userStore = useUsers()
</script>>

<template>
    <div class="navbar">
        <div class="navbar-end">
            <div v-if="userStore.currentUserId" class="buttons">
                <button class="button" @click="modal.showModal()">Log Out</button>
                <RouterLink to="/posts/new" class="button">New Post</RouterLink>
            </div>
            
            <div v-else class="buttons">
                <button class="button" @click="modal.showModal()">Sign Up</button>
                <RouterLink to="/posts/new" class="button">Sign In</RouterLink>
            </div>
        </div>
    </div>
    <Teleport to="#modal">
        <SignupForm />
    </Teleport>
</template>