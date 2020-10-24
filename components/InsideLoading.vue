<template>
  <div id="loading-container">
    <div id="inside-loading" class="text-center">
      <div class="spinner">
        <i class="uil-shutter-alt spin-icon text-primary"></i>
      </div>
      <h1 class="text-primary">LOADING...</h1>
    </div>
  </div>
</template>

<script>
export default {
name: "InsideLoading"
}
</script>

<style scoped>
#loading-container{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(244, 246, 248, 0.5);
  z-index: 2;
  cursor: pointer;
}
#inside-loading{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: white;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
}
</style>
