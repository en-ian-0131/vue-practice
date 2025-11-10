<template>
  <div class="child2Class">
    <div>Child2</div>
    <div>電腦：{{ computer }}</div>
    <div>書：{{ book }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Child2",
};
</script>

<script setup lang="ts">
import { ref } from "vue";
let computer = ref("聯成");
let book = ref(5);
defineExpose({ computer, book });
</script>

<style scoped>
.child2Class {
  border: 1px solid gray;
  background-color: lightgoldenrodyellow;
  border-radius: 10px;
  padding: 7px 10px;
}
</style>
