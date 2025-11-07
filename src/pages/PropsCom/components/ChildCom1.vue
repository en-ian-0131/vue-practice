<template>
  <div class="childClass">
    <div>Child Com1</div>
    <div>{{ toy }}</div>
    <button @click="emitter.emit('send-car', toy)">send toy</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "ChildCom1",
};
</script>

<script setup lang="ts">
import emitter from "@/tools/emitter";
import { ref } from "vue";

const toy = ref("變形金剛");
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
