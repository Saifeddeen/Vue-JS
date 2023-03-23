<script setup>

import { defineProps } from 'vue';
import { toRefs } from 'vue';
import { useUserStore } from '../stores/user';

const props = defineProps({
    product: Object
})

const { product } = toRefs(props)

const userStore = useUserStore()

function addToCart() {
    let cart = userStore.user.cart
    let added = {
        "product": product.value.id,
        "price": product.value.price
    }
    cart.push(added)
    userStore.user.cart = cart
    axios.put(`/users/${userStore.user.id}`, userStore.user).then((res) => {
        alert(`product ${product.value.name} added scucessfully`)
    })
}

</script>

<template>
    <div class="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
        <div class="w-28">
            <img :src="product.image" :alt="product.name" class="w-full">
        </div>
        <div class="w-1/3">
            <h2 class="text-gray-800 text-xl font-medium uppercase">{{ product.name }}</h2>
            <p class="text-gray-500 text-sm">Availability: <span class="text-green-600">In Stock</span></p>
        </div>
        <div class="text-primary text-lg font-semibold">{{ product.price }}</div>
        <a @click.prevent="addToCart()" href="#"
            class="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">add
            to cart</a>

        <div class="text-gray-600 cursor-pointer hover:text-primary">
            <i class="fa-solid fa-trash"></i>
        </div>
    </div>
</template>