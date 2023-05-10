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
                console.log(process.env.VUE_APP_BASEURL,"api")
                const data=await axios.get(`${process.env.VUE_APP_BASEURL}/product`);
                const res=await data.data;
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
        console.log("api",process.env.VUE_APP_BASEURL)
    }
}