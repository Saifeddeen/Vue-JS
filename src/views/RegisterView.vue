<template>
    <MainComponent>
        <!-- register -->
        <div class="contain py-16">
            <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                <h2 class="text-2xl uppercase font-medium mb-1">Create an account</h2>
                <p class="text-gray-600 mb-6 text-sm">
                    Register for new cosutumer
                </p>
                <form @submit.prevent="register()" method="post" autocomplete="off">
                    <div class="space-y-2">
                        <div>
                            <label for="name" class="text-gray-600 mb-2 block">Full Name</label>
                            <input v-model="name" type="text" name="name" id="name"
                                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="fulan fulana">
                        </div>
                        <div>
                            <label for="email" class="text-gray-600 mb-2 block">Email address</label>
                            <input v-model="email" type="email" name="email" id="email"
                                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="youremail.@domain.com">
                        </div>
                        <div>
                            <label for="password" class="text-gray-600 mb-2 block">Password</label>
                            <input v-model="password" type="password" name="password" id="password"
                                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="*******">
                        </div>
                        <div>
                            <label for="confirm" class="text-gray-600 mb-2 block">Confirm password</label>
                            <input v-model="pconfirm" type="password" name="confirm" id="confirm"
                                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="*******">
                        </div>
                    </div>
                    <div class="mt-6">
                        <div class="flex items-center">
                            <input type="checkbox" name="aggrement" id="aggrement"
                                class="text-primary focus:ring-0 rounded-sm cursor-pointer">
                            <label for="aggrement" class="text-gray-600 ml-3 cursor-pointer">I have read and agree to the <a
                                    href="#" class="text-primary">terms & conditions</a></label>
                        </div>
                    </div>
                    <div class="mt-4">
                        <button type="submit"
                            class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">create
                            account</button>
                    </div>
                </form>

                <!-- login with -->
                <div class="mt-6 flex justify-center relative">
                    <div class="text-gray-600 uppercase px-3 bg-white z-10 relative">Or signup with</div>
                    <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
                </div>
                <div class="mt-4 flex gap-4">
                    <a href="#"
                        class="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">facebook</a>
                    <a href="#"
                        class="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">google</a>
                </div>
                <!-- ./login with -->

                <p class="mt-4 text-center text-gray-600">Already have account? <router-link to="/login"
                        class="text-primary">Login
                        now</router-link></p>
            </div>
        </div>
        <!-- ./register -->
    </MainComponent>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import router from '../router';

import MainComponent from '../components/MainComponent.vue';

import { useUsersStore } from '../stores/usersStore';
import { useUserStore } from '../stores/user';
import axios from 'axios';

const usersStore = useUsersStore()
usersStore.fillUsers()

const userStore = useUserStore()

const name = ref("")
const email = ref("")
const password = ref("")
const pconfirm = ref("")

function chekEmail() {
    for (let i = 0; i < usersStore.users.length; i++) {
        if (usersStore.users[i].email === email.value) {
            return false
        }
    }
    return true
}

function checkFields() {
    if (name.value && email.value && password.value && pconfirm.value) {
        if (chekEmail()) {
            if (password.value === pconfirm.value) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }
}

function register() {
    console.log("run")
    if (checkFields()) {
        axios.post("/users", {
            "name": name.value,
            "email": email.value,
            "password": password.value,
            "cart": [],
            "wishlist": []
        }).then(res => {
            userStore.setUser(res.data)
            router.push({ "path": "/" })
        })
    }
}

</script>