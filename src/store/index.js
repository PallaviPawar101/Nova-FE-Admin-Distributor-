import { defineStore } from "pinia";


export const globalStore=defineStore("globalstore",{
    state:()=>({
        text:"global text"
    })
})

