import { defineStore } from "pinia";

export const useLocalStore = defineStore("signup",{
    state:()=>({
        text:"Local signup text"
    })
})