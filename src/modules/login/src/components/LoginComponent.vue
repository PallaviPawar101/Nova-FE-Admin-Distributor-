<template>
    <div style="display: flex;">
        <LoginSignupForm/>
       
    </div>

</template>

<script>
import LoginSignupForm from "@/globalcomponents/LoginSignupForm.vue";
import LoginApi from "../api/login_api_handle"
export default{
    name: "LoginComponent",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    mixins: [LoginApi],
    components: { LoginSignupForm }
}
</script>