import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCategoriesStore = defineStore("categories", () => {
    const categories = ref({})
    
    async function fillCategories(){
        categories.value = (await axios.get("/categories")).data
    }

    return {categories, fillCategories}
})