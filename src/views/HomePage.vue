<script setup>
import AdsComponent from '../components/AdsComponent.vue';
import MainComponent from '../components/MainComponent.vue';
import ProductComponent from '../components/ProductComponent.vue';
import CategoryComponent from '../components/CategoryComponent.vue';

import { useProductsStore } from '../stores/productsStore';
import { useCategoriesStore } from '../stores/categoriesStore';

const productsStore = useProductsStore()
const categoriesStore = useCategoriesStore()

productsStore.fillProducts()
categoriesStore.fillCategories()

</script>

<template>
    <MainComponent>
        
        <!-- banner -->
        <div class="bg-cover bg-no-repeat bg-center py-36"
            style="background-image: url('../src/assets/images/banner-bg.jpg');">
            <div class="container">
                <h1 class="text-6xl text-gray-800 font-medium mb-4 capitalize">
                    best collection for <br> home decoration
                </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br>
                    accusantium perspiciatis, sapiente
                    magni eos dolorum ex quos dolores odio</p>
                <div class="mt-12">
                    <a href="#" class="bg-primary border border-primary text-white px-8 py-3 font-medium 
                                          rounded-md hover:bg-transparent hover:text-primary">Shop Now</a>
                </div>
            </div>
        </div>
        <!-- ./banner -->

        <!-- features -->
        <div class="container py-16">
            <div class="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
                <!-- Feature -->
                <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                    <img src="../assets/images/icons/delivery-van.svg" alt="Delivery" class="w-12 h-12 object-contain">
                    <div>
                        <h4 class="font-medium capitalize text-lg">Free Shipping</h4>
                        <p class="text-gray-500 text-sm">Order over $200</p>
                    </div>
                </div>
                <!-- Feature -->
                <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                    <img src="../assets/images/icons/money-back.svg" alt="Delivery" class="w-12 h-12 object-contain">
                    <div>
                        <h4 class="font-medium capitalize text-lg">Money Rturns</h4>
                        <p class="text-gray-500 text-sm">30 days money returs</p>
                    </div>
                </div>
                <!-- Feature -->
                <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                    <img src="../assets/images/icons/service-hours.svg" alt="Delivery" class="w-12 h-12 object-contain">
                    <div>
                        <h4 class="font-medium capitalize text-lg">24/7 Support</h4>
                        <p class="text-gray-500 text-sm">Customer support</p>
                    </div>
                </div>
                <!-- Feature -->
            </div>
        </div>
        <!-- ./features -->

        <!-- categories -->
        <div class="container py-16">
            <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
            <div class="grid grid-cols-3 gap-3">
                <!-- CategCard -->
                <CategoryComponent v-for="categ in categoriesStore.categories" :category="categ"></CategoryComponent>
            </div>
        </div>
        <!-- ./categories -->

        <!-- new arrival -->
        <div class="container pb-16">
            <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
            <div class="grid grid-cols-4 gap-6">
                <!-- Product -->
                <template v-for="item in productsStore.products">
                    <ProductComponent v-if="item.type === 'new'" :product="item"></ProductComponent>
                </template>

            </div>
        </div>
        <!-- ./new arrival -->

        <!-- ads -->
        <AdsComponent></AdsComponent>
        <!-- ./ads -->

        <!-- Recomended -->
        <div class="container pb-16">
            <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">recomended for you</h2>
            <div class="grid grid-cols-4 gap-6">
                <!-- Product -->
                <template v-for="item in productsStore.products">
                    <ProductComponent v-if="item.type === 'recomended'" :product="item"></ProductComponent>
                </template>
            </div>
        </div>

    </MainComponent>
</template>

<style scoped></style>
