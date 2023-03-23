import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUsersStore = defineStore("users", () => {
    const users = ref({})
    
    async function fillUsers(){
        users.value = (await axios.get("/users")).data
    }

    return {users, fillUsers}
})