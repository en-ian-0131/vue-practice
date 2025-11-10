<template>
  <div class="fatherClass">
    <div>Father</div>
    <Children v-bind="$attrs" />
  </div>
</template>

<script lang="ts">
export default {
  name: "Father",
};
</script>

<script setup lang="ts">
import Children from "./Children.vue";
// defineProps(["a", "b"]);
</script>

<style scoped>
.fatherClass {
  border: 1px solid gray;
  background-color: lightsalmon;
  border-radius: 10px;
  padding: 7px 10px;
}
</style>
