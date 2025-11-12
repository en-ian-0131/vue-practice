<template>
  <div class="childrenClass">
    <div>Children</div>
    <div>繼承到財產：{{ injuctMoney.money }}萬元</div>
    <div>繼承到車子：{{ injuctCar.brand }}　{{ injuctCar.price }}萬元</div>
    <button @click="injuctMoney.updateMoney(6)">花財產</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Children",
};
</script>

<script setup lang="ts">
import { inject } from "vue";

let injuctMoney = inject("chan", { money: 0, updateMoney: (x: number) => {} });
let injuctCar = inject("chair", { brand: "", price: 0 });
</script>

<style scoped>
.childrenClass {
  border: 1px solid gray;
  background-color: lightgoldenrodyellow;
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
