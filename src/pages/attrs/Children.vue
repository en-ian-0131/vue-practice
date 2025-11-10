<template>
  <div class="childrenClass">
    <div>Children</div>
    <div>{{ a }}</div>
    <div>{{ b }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Children",
};
</script>

<script setup lang="ts">
defineProps(["a", "b"]);
</script>

<style scoped>
.childrenClass {
  border: 1px solid gray;
  background-color: lightgoldenrodyellow;
  border-radius: 10px;
  padding: 7px 10px;
}
</style>
