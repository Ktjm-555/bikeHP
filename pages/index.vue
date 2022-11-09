<script setup>
console.log('hello script setup')


</script>
<template>
<div>
  <header>

  </header>
  <div class="image_area">

  </div>
  <div class="about_area">

    <div class="about_title">

    </div>
    <div class="about_detail">
      
    </div>
  </div>
    
  <div class="bicycle_area">
    <div class="bicycle_title">

    </div>
    <div class="bicycle_detail">

    </div>
  </div>

  <footer>
  </footer>

</div>
</template>
<style lang="scss">
div {

  header {
    height: 60px;
    background-color: red;
  }

  .image_area {
    height: 600px;
    background-color:aqua;
  }

  .about_area {
    height: 395px;
    background-color: greenyellow;

    .about_title {
      height: 198px;
      background-color: blue;
    }

    .about_detail {

    }
  }

  .bicycle_area {
    height: 457px;
    background-color: yellow;

    .bicycle_title {
      height: 48px;
      background-color: red;
    }

    .bicycle_detail {
      background-color: beige;
    }
  }

  footer {
    height: 20px;
    background-color: blue;
   
  }


}
</style>

