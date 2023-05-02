import axios from "axios"



export default{
   
    methods:{
        async getData(){
            try{
                const data=await axios.get("https://dummy.restapiexample.com/api/v1/employees");
                const res=await data.data;
                console.log(res)

            }catch(err){
                console.log({message:err.message})
            }
           
        }
    },
    created(){
        this.getData()
    }
}