<template>
    <div style="display: flex;">
        <div class="loginSignupFormContainer">

            <div class="formMainContainer" >
                <br/>
                <div class="form" >
                <div>
                    <div>
                        <img src="https://i.ibb.co/0yDP8cB/Screenshot-from-2023-05-17-19-38-39.png" alt="SMART BUY" width="100%"/>
                    </div>
                    
                </div>
                <br/>
                <form action="" style="display: flex; flex-direction: column;">
                    <!-- <div> -->

                        <label for="">Email</label>
                        <input type="text"  placeholder="Enter your mail here.." class="form-control" v-model="store.email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    <!-- </div> -->
                    <!-- <div> -->

                        <label for="">Password</label>
                        <input type="password"  placeholder="Password here..." class="form-control" v-model="store.password">
                    <!-- </div> -->
                    <div class="repassword" v-if="!handleLoginPageShow">

                        <label for="">Re-Password</label>
                        <input type="text"  placeholder="Re enter password here..." class="form-control" v-model="store.repassword">
                    </div>
                        <br/>
                    <button type="submit" class="btn btn-primary" @click.prevent="handleUserAuth()">{{handleLoginPageShow ? 'Login' : 'Signup'}}</button>
                </form>
                <br/>
               <div style="text-align: center;">
                {{handleLoginPageShow ? "Have't created your account yet.." : "Already have an account"}}
               </div>
               <br/>

               <router-link to="/signup" v-if="handleLoginPageShow">
                <button class="btn btn-primary" style="width:100%">Signup</button>
               </router-link>
               <router-link to="/login" v-if="!handleLoginPageShow">
                <button class="btn btn-primary" style="width:100%">Login</button>
               </router-link>
            </div>

            <br/>

            </div> 

        </div>
       
    </div>

</template>

<script>
import "../assets/loginsignupform.css";
import {useUserAuth} from "@/store/userAuth"
export default{
    name:"LoginSignupForm",
    data(){
        return {
            path:""
        }
    },
    methods:{
        handleUserAuth(){
            if(this.path=='login'){
                this.store.handleLoginUser()
            }
        }
    },
    computed:{
        handleLoginPageShow(){
            if(this.path=='login') return true;
            else return false;
        }
    },
    created(){
        const path=this.$route.path.split("/")[1];
        this.path=path;
        let rp=document.getElementsByClassName("repassword");
        console.log(rp)
    },
    setup(){
        const store=useUserAuth();
        return {
            store
        }
    }
}
</script>