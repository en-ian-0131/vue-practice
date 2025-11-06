<template>
  <div class="childClass">
    <div>Child Com</div>
    <div>擁有玩具：{{ toy }}</div>
    <button type="button" @click="sendToy(toy)">給爸爸玩具</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "ChildCom",
};
</script>

<script setup lang="ts">
import { ref } from "vue";
defineProps(["getChildToy", "sendToy"]);

const toy = ref("奧特曼");
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
