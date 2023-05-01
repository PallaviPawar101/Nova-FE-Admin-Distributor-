<template>
    <div class="homeContainer">
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
                    <ProductCard v-for="product in productsdata" :product="product" :key="product.id"/>
                </div>
            </div>
        </div>
        <div  class="footerBar">
            <FooterBar/>
        </div>
    </div>
</template>

<script>
import NavBar from '@/globalcomponents/NavBar.vue';
import "../assets/homeview.css"
import SlidingProducts from '../components/SlidingProducts.vue';
import ProductCard from '@/globalcomponents/ProductCard.vue';
import FooterBar from '@/globalcomponents/FooterBar.vue';
import productDataMixin from '@/mixins/productDataMixin';
export default {
    components: {
    NavBar,
    SlidingProducts,
    ProductCard,
    FooterBar
},
  
    mixins:[productDataMixin]
}


</script>

