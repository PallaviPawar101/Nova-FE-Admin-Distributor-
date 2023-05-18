import router from "@/router";
import axios from "axios";
import { defineStore } from "pinia";


const defaultState={
    email:"",
    password:"",
    repassword:""
}
export const useUserAuth=defineStore("userauth",{
    state:()=>({
        ...defaultState
    }),
    actions:{
        async handleLoginUser(){
            try {
                const res = await axios.post(`${process.env.VUE_APP_BASEAPI}login`, {
                    email: this.email,
                    password: this.password
                })
                const data = await res.data;

                // getting current date and adding 30 days of expiry from the current time and date
                var nextMonth = new Date();
                nextMonth.setDate(nextMonth.getDate() + 30);
                var expiresDate = nextMonth.toString();
                console.log(expiresDate);
                document.cookie=`refresh=${data.refreshToken};expires=${expiresDate};secure=httpOnly`;
                router.push({path:"/"})
                this.reset();
            } catch (err) {
                alert( "service is unable provide right now, Please try after some time.." )
            }
        },
        reset() {
            Object.assign(this, defaultState);
        }
    }
})