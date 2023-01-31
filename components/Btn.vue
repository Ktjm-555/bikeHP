<script setup lang="ts">

type Icon = 'dog' | 'panda' | 'rabbit' ; // 種類
type Size = 'mini' | 'normal' | 'big' ;
/**
 * Props
 */
const props = withDefaults(defineProps<{
  click?: Function
  size?: Size
  icon?: Icon
}>(), {
  click: () => { },
  size: 'normal',
  icon: 'none',
});

</script>

<template>
<div>
  <button
    class="button"
    :class="size"
    @click="click()"
  >
    <!-- icon -->
    <div class="in-button">
        <span class="icon center" :class="icon"></span>
    </div>
  </button>
</div>
</template>

<style lang="scss" scoped>
.button {
  padding: 0;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 70px;

  &.mini {
    height: 150px;
    width: 150px;
  }

  &.normal {
    height: 170px;
    width: 170px;
  }

  &.big {
    height: 200px;
    width: 200px;
  }

  
  .in-button {
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      display: block;
      width: 100px;
      height: 100px;
      cursor: pointer;
      background-repeat: no-repeat;
      background-size: contain;

      &.dog {
        background-image: url("../assets/img/inu.png");
      }

      &.panda {
        background-image: url("../assets/img/panda.png");
      }

      &.rabbit {
        background-image: url("../assets/img/usagi.png");
      }
    }
  }
}
</style>