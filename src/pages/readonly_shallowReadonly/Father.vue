<template>
  <div class="fatherClass">
    <div>Father</div>
    <div>Counts：{{ sum }}</div>
    <div>Counts readonly：{{ readonly_sum }}</div>
    <button @click="add">+1</button>
    <button @click="add_readonly">+1</button>
    <hr />
    <div>Car：{{ shallowCar }}</div>
    <button @click="changeBrand">changeBrand</button>
    <button @click="changeColor">changeColor</button>
    <button @click="changeEngin">changeEngin</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Father",
};
</script>

<script setup lang="ts">
import { reactive, readonly, ref, shallowReadonly } from "vue";

let sum = ref(0);
let readonly_sum = readonly(sum);
let car = reactive({
  brand: "賓士",
  options: {
    color: "紅色",
    engin: "V1",
  },
});
let shallowCar = shallowReadonly(car);

const add = () => (sum.value += 1);
const add_readonly = () => (readonly_sum.value += 1);

const changeBrand = () => (shallowCar.brand = "保時捷");
const changeColor = () => (shallowCar.options.color = "紫色");
const changeEngin = () => (shallowCar.options.engin = "V16");
</script>

<style scoped></style>
