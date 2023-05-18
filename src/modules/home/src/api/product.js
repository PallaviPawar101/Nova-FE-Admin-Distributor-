import axios from "axios";


export default{
    data(){
        return{
            productsdata:[],
            errorShow:{
                state:false,
                title:"",
            }
        }
    },
    methods:{
        async handleGetData(){
            try{
                const data=await axios.get(`${process.env.VUE_APP_BASEAPI}products`);
                const res=await data.data.products;
                this.productsdata=res;
            }catch(err){
                this.handleError("can't get the products, try after some time");
            }


        },
        handleError(title){
            this.errorShow.title=title
            alert(this.errorShow.title)
            this.errorShow.title=""
        }
    },
    async created(){
        await this.handleGetData();
    },
   

}