<template>
    <div class="card" style="width:300px">
  
      <div class="front">
        <img :src="image" style="width: 100%;">
      </div>
  
      <div class="back middle">
        <div class="back-content middle">
          <h2>{{ product.brand }}</h2>
  
          <span>Price : {{ price }} RS</span>
  
          <div class="sm">
            <button class="btn btn-primary">view </button>
          </div>
          <div>
            Rating : {{ rating }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import "../assets/productcard.css"
  export default {
    data() {
      return {
        
        image:'',
        price:Math.round(Math.random()*20000),
        rating:(Math.random()*5).toFixed(1)
  
      }
    },
    props:{
        product:Object
    },
    methods: {
      handleImageCarouse(){
        const len= this.product?.images?.length;
       
        let imgCount=0;
        setInterval(()=>{
          this.image=this.product.images[imgCount]
          imgCount++;
          imgCount === len ? imgCount=0 : null;
        },2000)
      }
    },
    created(){
      this.handleImageCarouse();
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  
  