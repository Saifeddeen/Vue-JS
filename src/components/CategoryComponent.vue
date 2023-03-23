<script setup>
import { toRefs, defineProps } from 'vue';

const props = defineProps({
    category: Object
})

const { category } = toRefs(props)

</script>

<template>
    <div class="relative rounded-sm overflow-hidden group">
        <img :src="category.image" :alt="category.name" class="w-full">
        <a href="#" class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
            {{ category.name }}
        </a>
    </div>
</template>