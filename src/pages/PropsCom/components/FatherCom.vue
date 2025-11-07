<template>
  <div class="fatherClass">
    <div>Father Com</div>
    <ChildCom1 @haha="fatherFn" />
    <ChildCom2 @haha="fatherFn" />
  </div>
</template>

<script lang="ts">
export default {
  name: "FatherCom",
};
</script>

<script setup lang="ts">
import ChildCom1 from "./ChildCom1.vue";
import ChildCom2 from "./ChildCom2.vue";

const fatherFn = (value: string) => {
  console.log("觸發Fn", value);
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
