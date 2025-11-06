<template>
  <div class="childClass">
    <div>Child Com</div>
    <button @click="emit('haha', '666')">Test</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "ChildCom",
};
</script>

<script setup lang="ts">
import { onMounted } from "vue";

const emit = defineEmits(["haha"]);

onMounted(() => setTimeout(() => emit("haha"), 2000));
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
