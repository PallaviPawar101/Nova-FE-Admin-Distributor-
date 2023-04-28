<template>
    <div class="homeContainer">
        <div class="bgImageBox">
            <div class="position-relative navbar">
                <NavBar/>
            </div>

            <div class="contentText">
                <p>
                    Be smart Buy smart
                </p>
            </div>

            <div class="slidingProducts">

                <SlidingProducts/>
            </div>

            <div class="container topPics">
                <div class="topPicsHeader">
                    Top 3 pics of today..
                </div>
                <div>
                    <TopPicProducts/>
                </div>
            </div>
        </div>
        <div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/globalcomponents/NavBar.vue';
import "../assets/homeview.css"
import SlidingProducts from '../components/SlidingProducts.vue';
import TopPicProducts from '../components/TopPicProducts.vue';
export default{
    components:{
    NavBar,
    SlidingProducts,
    TopPicProducts
}
}
</script>

