<template>
  <div class="GrandfatherClass">
    <div>Grandfather</div>
    <div>{{ a }}</div>
    <div>{{ b }}</div>
    <div>{{ c }}</div>
    <Father :a :b :c v-bind="{ x: 100, y: 200 }" />
  </div>
</template>

<script lang="ts">
export default {
  name: "Grandfather",
};
</script>

<script setup lang="ts">
import { ref } from "vue";
import Father from "./Father.vue";

let a = ref(1);
let b = ref(2);
let c = ref(3);
</script>

<style scoped>
.GrandfatherClass {
  border: 1px solid gray;
  background-color: lightblue;
  border-radius: 10px;
  padding: 7px 10px;
}
</style>
