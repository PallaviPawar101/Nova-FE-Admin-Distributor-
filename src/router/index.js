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
    

]

const router =createRouter({
    history:createWebHistory(),
    routes
})

export default router