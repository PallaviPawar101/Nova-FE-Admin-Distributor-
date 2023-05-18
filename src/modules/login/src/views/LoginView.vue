<template>
    <LoginComponent/>
</template>

<script>
import LoginComponent from '../components/LoginComponent.vue';

export default{
    components:{
        LoginComponent
    },
    created(){
        console.log(process.env.VUE_APP_BASEAPI)
    }
}

</script>

