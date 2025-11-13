<template>
  <div class="category">
    <slot name="game" :yoxi="games"></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Category",
};
</script>

<script setup lang="ts">
import { reactive } from "vue";
let games = reactive([
  {
    id: "1",
    name: "英雄聯盟",
  },
  {
    id: "2",
    name: "寶可夢",
  },
  {
    id: "3",
    name: "馬力歐賽車",
  },
  {
    id: "4",
    name: "海賊無雙",
  },
]);
</script>

<style scoped>
.category {
  background-color: lightblue;
  box-shadow: 0 0 10px;
  padding: 7px 10px;
  border-radius: 10px;
  height: 500px;
  width: 200px;
}
</style>
