<template>
  <div class="fatherClass">
    <div>Father Com</div>
    <div>擁有車子：{{ car }}</div>
    <div>v小孩給的玩具：{{ getChildToy }}</div>
    <ChildCom :sendToy="getToy" />
  </div>
</template>

<script lang="ts">
export default {
  name: "FatherCom",
};
</script>

<script setup lang="ts">
import { ref } from "vue";
import ChildCom from "./ChildCom.vue";
const car = ref("賓士");
const getChildToy = ref("");

const getToy = (value: string) => {
    getChildToy.value = value
};
</script>

<style scoped>
.fatherClass {
  border: 1px solid gray;
  background-color: lightblue;
  border-radius: 10px;
  padding: 7px 10px;
}
</style>
