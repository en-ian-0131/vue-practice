<template>
  <div class="fatherClass">
    <div>Father Com</div>
    <!-- <input type="text" v-model="username"> -->
    <!-- 底層邏輯 -->
    <!-- <input
      type="text"
      :value="username"
      @input="username = (<HTMLInputElement>$event.target).value"
    /> -->
    <IanInput v-model:account="username" v-model:pwd="password"/>
    <!-- <IanInput :modelValue="username" @update:modelValue="username = $event" /> -->
  </div>
</template>

<script lang="ts">
export default {
  name: "FatherCom",
};
</script>

<script setup lang="ts">
import { ref } from "vue";
import IanInput from "./components/IanInput.vue";

let username = ref("ABC");
let password = ref("123");
</script>

<style scoped>
.fatherClass {
  border: 1px solid gray;
  background-color: lightblue;
  border-radius: 10px;
  padding: 7px 10px;
}
</style>
