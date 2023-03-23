import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductsStore = defineStore("products", () => {
    const products = ref({})
    
    async function fillProducts(){
        products.value = (await axios.get("/products")).data
    }

    return {products, fillProducts}
})