<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components';

const state = reactive({
  display: false,
});

</script>
<template>
  <button @click.stop="state.display = !state.display">
    buttonClick!!  
  </button>
  <div class="content" 
    v-show="state.display" 
    v-on-click-outside.bubble="() => state.display = false">
    Hello World
  </div>
</template>
<style>
button {
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
}
</style>