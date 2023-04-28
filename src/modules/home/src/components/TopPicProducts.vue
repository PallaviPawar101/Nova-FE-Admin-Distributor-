<template>
    <div class="card" style="width:300px">
   
   <div class="front">
     <img src="https://images.unsplash.com/photo-1601758174493-45d0a4d3e407" style="width: 100%;"> 
   </div>
   
   <div class="back middle">
     <div class="back-content middle">
       <h2>Aphinya Dechalert</h2>
     
       <span>30 Days Of Code challenge</span>
       
       <div class="sm">
        <div>j</div>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
export default{}
</script>

<style scoped>
.middle{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
}
.card{
  cursor: pointer;
  width: 340px;
  height:480px;
}
.front, .back{
  width:100%;
  height: 100%;
  overflow:hidden;
  backface-visibility:hidden;
  position:absolute;
  transition: transform .5s linear;
}
.card img{
  height:100%;
}
.back{
  background:#fff;
  transform:rotateY(180deg);
}
.back-content{
  color: #2c3e50;
  text-align:center;
  width:100%;
}
.sm{
  margin:20px;
}
.sm a{
  display:inline-flex;
  width:40px;
  height:40px;
  text-decoration:none;
  justify-content:center;
  align-items: center;
  color: #da541a;
  font-size:24px;
  transition:0.4s;
  border-radius:50%;
}
.sm a:hover{
  background: #2c3e50;
  color:white;
}
.card:hover > .back{
  transform: perspective(600px) rotateY(0deg);
}
</style>