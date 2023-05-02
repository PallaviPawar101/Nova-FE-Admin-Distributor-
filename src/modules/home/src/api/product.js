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
                console.log(process.env.VUE_APP_BASEURL,"api")
                const data=await axios.get(`${process.env.VUE_APP_BASEURL}/products`);
                const res=await data.data;
                this.productsdata=res;
            }catch(err){
                console.log({message:err.message})
                console.log("khghj")
            }
        },
    },
    async created(){
        await this.handleGetData();
        console.log("api",process.env.VUE_APP_BASEURL)
    }
}