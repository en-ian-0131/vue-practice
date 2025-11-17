<template>
  <div class="fatherClass">
    <div>Father</div>
    <Suspense>
      <template #default>
        <Child />
      </template>
      <template #fallback>加載中...</template>
    </Suspense>
  </div>
</template>

<script lang="ts">
export default {
  name: "Father",
};
</script>

<script setup lang="ts">
import { Suspense } from "vue";
import Child from "./Child.vue";
</script>

<style scoped>
.fatherClass {
  background-color: lightgray;
  padding: 10px;
  border-radius: 5px;
  filter: saturate(200%);
}
</style>
