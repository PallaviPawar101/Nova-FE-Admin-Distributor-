<template>
    <div class="loading" v-if="loading">
        <div class="spinner-border" role="status" >
            <span class="sr-only"></span>
        </div>
    </div>
    <div :class="loading ? 'homeContainer containerLoading' : 'homeContainer' ">
        <div class="bgImageBox">
            <div class="navbar navBar">
                <NavBar />
            </div>

            <div class="contentText">
                <p>
                    Be smart Buy smart
                </p>
            </div>

            <div class="slidingProducts">

                <SlidingProducts />
            </div>

            <div class="container topPics">
                <div class="topPicsHeader">
                    Top 3 pics of today..
                </div>
                <div class="container productContainer">
                    <ProductCard v-for="product in productsdata" :product="product" :key="product.id" />
                </div>
            </div>
        </div>
        <div class="footerBar">
            <FooterBar />
        </div>
    </div>
</template>

<script>
import NavBar from '@/globalcomponents/NavBar.vue';
import "../assets/homeview.css"
import SlidingProducts from '../components/SlidingProducts.vue';
import ProductCard from '@/globalcomponents/ProductCard.vue';
import FooterBar from '@/globalcomponents/FooterBar.vue';
import product from '../api/product';
import { useGlobalStore } from '@/store';
export default {
    components: {
        NavBar,
        SlidingProducts,
        ProductCard,
        FooterBar
    },
    data(){
        return {
            loading:false
        }
    },

    setup(){
        const store=useGlobalStore();
        return{
            store
        }
    },

    mixins: [product],

    async created(){
        this.loading=true;
       await this.store.authStatus();
       this.loading=false;
    }
}


</script>

<style>
.loading{
    position: absolute;
    /* width:100%; */
    margin-left:48%;
    margin-top: 20rem;
}
.containerLoading{
    position: fixed;
    width:100vw;
    height: 100vh;
    opacity: 0.5;
}
</style>
