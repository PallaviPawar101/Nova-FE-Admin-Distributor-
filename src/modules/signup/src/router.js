
export default [
    
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Home.vue'),
    },
    {
        path: '/signup/:id',
        name: 'signupchild',
        component: () => import("./views/HomeChild.vue"),
       
      }
   
  ]