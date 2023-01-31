<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components';

const state = reactive({
  display: false,
});

const alertDo = ():  void => {
 alert('クリックされたよ。');
}

</script>
<template>
  <div class="btn-content">
    <Btn 
      :icon="'dog'"
      :size="'mini'"
      @click="alertDo()"
    />
    <Btn 
      :icon="'panda'"
      :size="'normal'"
      @click="alertDo()"
    />  
    <Btn 
      :icon="'rabbit'"
      :size="'big'"
      @click="alertDo()"
    />
  </div>
  
</template>
<style>
.btn-content {
  position: absolute;
  top: 100px;
  left: 500px;
}
button {
  margin: 20px;
}
/* button {
  position: absolute;
    top: 20%;
    left: 20%;
}

.content {
  position: absolute;
  top: 25%;
  left: 20%;
  border: solid 1px;
  padding: 10px;
} */
</style>