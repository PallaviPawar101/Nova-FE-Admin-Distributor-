// import { useGlobalStore } from "@/store/index";
import { createRouter,createWebHistory } from "vue-router";

const routes = [

    {
        path:"/",
        component:()=>import("@/views/HomeView.vue")
    },
    {
         path: "/:catchAll(.*)",
        component:()=>import("@/views/NotFoundPage.vue")
    }


];



const router =createRouter({
    history:createWebHistory(),
    routes
})

// router.beforeEach(async(to="/") => {
//     const store = useGlobalStore();
   
//         await store.authStatus();
    
//   })

export default router   