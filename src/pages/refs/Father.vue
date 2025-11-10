<template>
  <div class="fatherClass">
    <div>Father</div>
    <div>房產：{{ house }}</div>
    <button @click="changeCar">改變Child1的車</button>
    <button @click="changeComputer">改變Child12的電腦</button>
    <button @click="changeAllBook($refs)">改變所有小孩的書加3</button>
    <Child1 ref="c1" />
    <Child2 ref="c2" />
  </div>
</template>

<script lang="ts">
export default {
  name: "Father",
};
</script>

<script setup lang="ts">
import { ref } from "vue";
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";

let house = ref(4);
let c1 = ref();
let c2 = ref();

const changeCar = () => (c1.value.car = "法拉利");
const changeComputer = () => (c2.value.computer = "巨匠");
const changeAllBook = (refs: { [key: string]: any }) => {
  for (const key in refs) refs[key].book += 3;
};

defineExpose({ house });
</script>

<style scoped>
.fatherClass {
  border: 1px solid gray;
  background-color: lightsalmon;
  border-radius: 10px;
  padding: 7px 10px;
}
button {
  border: 1px solid gray;
  background-color: lightgray;
  border-radius: 10px;
  padding: 7px 10px;
}
</style>
