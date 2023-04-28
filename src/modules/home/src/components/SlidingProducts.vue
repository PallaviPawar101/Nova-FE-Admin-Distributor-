<template>
    <div class="">
        <div class="container slidingContainer">
            <div>
                <div id="carouselExampleDark" class="carousel carousel-dark slide sliderMain" data-bs-ride="carousel">
                    <div class="carousel-inner sliderMain">
                        <div :class="sliderImageShow == 1 ? 'carousel-item active' : 'carousel-item'"
                            data-bs-interval="10000">
                            <img src="../assets/watch01.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block sliderContent">
                                <h5 class="text w-100">Advanced bt calling</h5>

                            </div>
                        </div>
                        <div :class="sliderImageShow == 2 ? 'carousel-item active' : 'carousel-item'"
                            data-bs-interval="2000">
                            <img src="../assets/watch02.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block sliderContent">
                                <h5 class="text w-100">Bluetooth 5.5</h5>
                            </div>
                        </div>
                        <div :class="sliderImageShow == 3 ? 'carousel-item active' : 'carousel-item'">
                            <img src="../assets/watch03.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block sliderContent w-100">
                                <h5 class="text w-100"></h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




        </div>
    </div>
</template>

<script>
import "../assets/slidingproducts.css"
export default {
    name: 'SlidingProducts',
    data() {
        return {
            sliderImageShow: 1
        }
    },
    methods: {
        handleSlideShow() {
            let count=1;
           setInterval(()=>{
                if(count==3) count=0;
                count+=1;
                this.sliderImageShow=count;
           },2000)
        }
    },
    created() {
        this.handleSlideShow()
    }
}
</script>