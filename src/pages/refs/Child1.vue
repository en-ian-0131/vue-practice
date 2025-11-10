<template>
  <div class="child1Class">
    <div>Child1</div>
    <div>車：{{ car }}</div>
    <div>書：{{ book }}</div>
    <button @click="minusHouse($parent)">幹掉一套房產</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Child1",
};
</script>

<script setup lang="ts">
import { ref } from "vue";
let car = ref("賓士");
let book = ref(3);

const minusHouse = (parent: any) => (parent.house -= 1);
defineExpose({ car, book });
</script>

<style scoped>
.child1Class {
  border: 1px solid gray;
  background-color: lightskyblue;
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
