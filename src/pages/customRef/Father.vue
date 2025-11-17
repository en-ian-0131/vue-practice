<template>
  <div class="fatherClass">
    <div>Father</div>
    <div>{{ msg }}</div>
    <input type="text" v-model="msg" />
  </div>
</template>

<script lang="ts">
export default {
  name: "Father",
};
</script>

<script setup lang="ts">
import useMsg from "./hooks/useMsg";

let { msg } = useMsg("hello world", 1000);
</script>

<style scoped></style>
