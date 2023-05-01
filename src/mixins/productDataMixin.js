import axios from "axios";


export default{
    data(){
        return{
            productsdata:[]
        }
    },
    methods:{
        async handleGetData(){
            try{
                const data=await axios.get(`${process.env.VUE_APP_BASEURL}/products`);
                const res=await data.data;
                this.productsdata=res;
            }catch(err){
                console.log({message:err.message})
            }
        },
    },
    created(){
        this.handleGetData();
        console.log(this.base_api)
    }
}