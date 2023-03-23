<script setup>
import axios from 'axios';
import { defineProps } from 'vue';
import { toRefs } from 'vue';
import { useUserStore } from '../stores/user';

const userStore = useUserStore()

const props = defineProps({
    product: Object
})

const { product } = toRefs(props)

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

function addToWishlist() {
    let wishlist = userStore.user.wishlist
    let added = {
        "product": product.value.id,
    }

    for (let i=0; i<wishlist.length; i++) {
        if (wishlist[i].product === product.value.id) {
            alert("this product already in wishlist")
            return
        }
    }

    wishlist.push(added)
    userStore.user.wishlist = wishlist
    axios.put(`/users/${userStore.user.id}`, userStore.user).then((res) => {
        alert(`product ${product.value.name} added to wishlist`)
    })
}

</script>

<template>
    <div class="bg-white shadow rounded overflow-hidden group">
        <div class="relative">
            <img :src="product.image" :alt="product.name" class="w-full">
            <div v-if="userStore.user.id" class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a href="#"
                    class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="view product">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </a>
                <a href="#"
                    class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="add to wishlist">
                    <i @click.prevent="addToWishlist()" class="fa-solid fa-heart"></i>
                </a>
            </div>
        </div>
        <div class="pt-4 pb-3 px-4">
            <a href="#">
                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    {{ product.name }}</h4>
            </a>
            <div class="flex items-baseline mb-1 space-x-2">
                <p class="text-xl text-primary font-semibold">${{ product.price }}</p>
                <p class="text-sm text-gray-400 line-through">${{ product.initialPrice }}</p>
            </div>
            <div class="flex items-center">
                <div class="flex gap-1 text-sm text-yellow-400">
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                </div>
                <div class="text-xs text-gray-500 ml-3">(150)</div>
            </div>
        </div>
        <template v-if="userStore.user.id">
            <a v-if="userStore.user.id" @click.prevent="addToCart()" href="#"
            class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
            Add to Cart
        </a>
        </template>
    </div>
</template>