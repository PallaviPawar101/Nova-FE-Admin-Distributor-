import axios from "axios";


export default{
    data(){
        return{
            productsdata:[]
        }
    },
    methods:{
        async handleGetData(){
            const data=await axios.get("http://localhost:8000/products");
            const res=await data.data;
            this.productsdata=res;
        },
    },
    created(){
        this.handleGetData();
    }
}