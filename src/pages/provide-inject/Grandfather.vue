<template>
  <div class="GrandfatherClass">
    <div>Grandfather</div>
    <div>財產：{{ money }}萬元</div>
    <div>車子：{{ car.brand }}　{{ car.price }}萬元</div>
    <Father />
  </div>
</template>

<script lang="ts">
export default {
  name: "Grandfather",
};
</script>

<script setup lang="ts">
import { provide, reactive, ref } from "vue";
import Father from "./Father.vue";

let money = ref(112);
let car = reactive({
  brand: "賓士",
  price: 100,
});

const updateMoney = (value: number) => (money.value -= value);

provide("chan", { money, updateMoney });
provide("chair", car);
</script>

<style scoped>
.GrandfatherClass {
  border: 1px solid gray;
  background-color: lightblue;
  border-radius: 10px;
  padding: 7px 10px;
}
</style>
