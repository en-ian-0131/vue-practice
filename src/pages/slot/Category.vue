<template>
  <div class="category">
    <slot name="s1" />
    <slot name="s2" />
  </div>
</template>

<script lang="ts">
export default {
  name: "Category",
};
</script>

<script setup lang="ts"></script>

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
