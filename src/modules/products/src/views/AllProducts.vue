<template>

    <div>
        <NavBar />
    </div>
    <div class="container">
        <div>
            <div style="font-size: 35px;margin-top: 35px;">All Watches</div>
            <div class="allProductsContainer">
                <ProductCard v-for="product in productsdata" :key="product.id" :product="product"/>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/globalcomponents/NavBar.vue';
import ProductCard from '@/globalcomponents/ProductCard.vue';
import productDataMixin from '@/mixins/productDataMixin';

export default {
    components: { NavBar, ProductCard },
    mixins:[productDataMixin]
}
</script>

<style>
.allProductsContainer{
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
@media screen and (max-width:450px) {
    .allProductsContainer{
        flex-direction: column;
        justify-content: center;
        gap:20px;
        padding:20px;
    }
}

</style>