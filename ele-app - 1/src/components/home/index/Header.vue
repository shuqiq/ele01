<template>
<header class="header">
  <div class="header-top">福中三路深圳市民中心</div>


  <div class="header-bottom">
     <div class="search">商家搜索</div>
   
  </div>
</header>

</template>

<script>

export default{
   name: 'home-header'

}
</script>

<style scoped>
.header{
    width:100%; height:82px;
    background-image: linear-gradient(90deg,#0af,#0085ff);

}
.header-top{
  width:100%; height:38px;
  font-size:14px; color:#fff;
}
.header-bottom{
  width:100%; height:44px;
  text-align:center; 
  border-bottom: 1px solid #5ed5ff;
  box-sizing: border-box;
  position:relative;
}
.search{
  width:296px; height:30px;
  text-align:center; line-height:30px;
  background:#fff;
  font-size:12px; color:#8f8f8f;
  position:absolute;
  left:12px;
  top: 6px;
}


</style>
