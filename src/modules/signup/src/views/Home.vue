<template>
    <h1>SignUp Page</h1>
    {{ globalStoree.text }}
    <br/>
    {{ signupStore.text }}
</template>

<script>
import { globalStore } from '@/store';
import {useLocalStore} from "../store"
export default{
    name:'SignUp',
    setup(){
        const globalStoree=globalStore();
        const signupStore=useLocalStore()
        return{
            globalStoree,
            signupStore
        }
    }
}
</script>