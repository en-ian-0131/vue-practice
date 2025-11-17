<template>
  <div class="fatherClass">
    <div>Father</div>
    <img src="https://www.atguigu.com/images/index_new/logo.png" alt="" />
    <Model />
  </div>
</template>

<script lang="ts">
export default {
  name: "Father",
};
</script>

<script setup lang="ts">
import Model from "./Model.vue";
</script>

<style scoped>
.fatherClass {
  background-color: lightgray;
  padding: 10px;
  border-radius: 5px;
  filter: saturate(200%);
  width: 200px;
}
</style>
