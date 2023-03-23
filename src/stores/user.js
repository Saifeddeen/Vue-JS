import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {

  const user = ref({})
  // const cart = ref({})

  function setUser(u) {
    user.value = u
  }

  // async function getCart(){
  //   if (user.value) {
  //     axios.get("/users?id=" + user.value.id + "/cart").then((res) => {
  //       cart.value = res.data
  //     })
  //   }
  // }

  return { user, setUser }
})
