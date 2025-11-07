<template>
  <div class="childClass">
    <div>Child Com2</div>
    <div>{{ car }}</div>
    <div>{{ toy }}</div>
    <!-- <button @click="">Test</button> -->
  </div>
</template>

<script lang="ts">
export default {
  name: "ChildCom2",
};
</script>

<script setup lang="ts">
import emitter from "@/tools/emitter";
import { ref } from "vue";

const car = ref("神腦");
const toy = ref("");
emitter.on("send-car", (val:string) => {
  toy.value = val;
});
</script>

<style scoped>
.childClass {
  border: 1px solid gray;
  background-color: lightsalmon;
  border-radius: 10px;
  padding: 7px 10px;
  margin-left: 20px;
}

button {
  background-color: lightgray;
  border-radius: 10px;
  padding: 7px 10px;
}
</style>
