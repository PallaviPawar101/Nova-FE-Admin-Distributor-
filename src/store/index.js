import axios from "axios";
import { defineStore } from "pinia";


export const useGlobalStore=defineStore("globalstore",{
    state:()=>({
        isLoggedIn:false
    }),
    actions:{
        async authStatus(){
            try{
                const token=document.cookie.split("=")[1];
                console.log(token)
                const headers = {
                    Authorization: `Bearer ${token}`
                  };
                  await axios.get(`${process.env.VUE_APP_BASEAPI}/protected`, { headers });
                  this.isLoggedIn=true;
            }catch(err){
                this.isLoggedIn=false;
                return err
            }
        }
    }
})

