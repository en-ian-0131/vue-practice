<template>
  <div class="childClass">
    <div>Child</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Child",
};
</script>

<script setup lang="ts">
import axios from "axios";

const { data } = await axios.get("...");
console.log(data);
</script>

<style scoped>
.childClass {
  background-color: skyblue;
  padding: 10px;
  border-radius: 5px;
  filter: saturate(200%);
}
</style>
