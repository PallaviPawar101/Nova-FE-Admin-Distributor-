
export default [
    
    {
      path: '/products',
      name: 'products',
      component: () => import('./views/AllProducts.vue'),
    },
    {
      path:"/products/:id",
      name:"product",
      component:()=> import("./views/ProductView.vue")
    }
   
  ]