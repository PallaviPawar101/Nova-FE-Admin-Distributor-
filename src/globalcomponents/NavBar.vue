<template>
    <div class="navContainer">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div class="d-flex justify-content-between " style="width:100%">
                    <div class="brandName">
                        <a class="navbar-brand" href="#">SmartBuy</a>
                    </div>
                    <div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation" @click="handleNavToggle">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    
                </div>

                <div :class=" !this.navToggle ? 'collapse navbar-collapse rightBox' : 'navbar-collapse rightBox'" id="navbarSupportedContent ">

                    <div class="searchBar">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>

                    <div class="d-flex ">
                        
                       <div class="profileBox">
                            
                       </div>
                       <div class="profileName" v-show="this.navToggle">profile</div>
                    </div>


         
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import "../assets/navbar.css"
export default {
    data(){
        return{
            navToggle:false
        }
    },
    methods:{
        handleNavToggle(){
            this.navToggle=!this.navToggle;
        }
    }
}
</script>