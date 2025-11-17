<template>
  <div>
    <button @click="isShow = true">開啟談窗</button>
    <teleport to="body">
      <div class="modelClass" v-show="isShow">
        <div>Model</div>
        <div>談窗內容</div>
        <button @click="isShow = false">關閉談窗</button>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
export default {
  name: "Model",
};
</script>

<script setup lang="ts">
import { ref } from "vue";

let isShow = ref(false);
</script>

<style scoped>
.modelClass {
  background-color: lightblue;
  padding: 10px;
  border-radius: 5px;
  width: 150px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border: 1px solid black;
  box-shadow: 3px 3px 10px gray;
  position: fixed;
  top: 20px;
  left: 50%;
  translate: -50%;
}
</style>
