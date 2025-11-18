<template>
  <div class="childClass">
    <div>Child{{ x }}</div>
    <h2 v-beauty="sum">我是小孩</h2>
    <Hello />
  </div>
</template>

<script lang="ts">
export default {
  name: "Child",
};
</script>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";

const { data } = await axios.get("...");
console.log(data);

let sum = ref(0);
</script>

<style scoped>
.childClass {
  background-color: skyblue;
  padding: 10px;
  border-radius: 5px;
  filter: saturate(200%);
}
</style>
