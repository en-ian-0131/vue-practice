<template>
  <div class="category">
    <h2>{{ title }}</h2>
    <slot>默認插槽內容</slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Category",
};
</script>

<script setup lang="ts">
defineProps(["title"]);
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
h2 {
  background-color: orange;
  text-align: center;
  font-weight: 700;
}
</style>
