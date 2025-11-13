<template>
  <div class="father">
    <div>Father</div>
    <div class="content">
      <div>
        <div>
          <div>汽車品牌：{{ person.age }}</div>
          <div>汽車顏色：{{ person.name }}</div>
        </div>
        <div class="buttonGroup">
          <button @click="changeAge">更改年齡</button>
          <button @click="changeName">更改名字</button>
          <button @click="changePerson">更改人</button>
        </div>
      </div>
      <div>
        <div>
          <div>汽車品牌：{{ car.brand }}</div>
          <div>汽車顏色：{{ car.options.color }}</div>
          <div>汽車引擎：{{ car.options.engine }}</div>
        </div>
        <div class="buttonGroup">
          <button @click="changeBrand">更改品牌</button>
          <button @click="changeColor">更改顏色</button>
          <button @click="changeEngine">更改引擎</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Father",
};
</script>

<script setup lang="ts">
import { reactive, ref, shallowRef, shallowReactive } from "vue";

//shallowRef
let person = shallowRef({
  age: 26,
  name: "Ian",
});

const changeAge = () => {
  person.value.age = 30;
};
const changeName = () => {
  person.value.name = "John";
};
const changePerson = () => {
  person.value = {
    age: 60,
    name: "tony",
  };
};

//shallowReactive
let car = reactive({
  brand: "賓士",
  options: {
    color: "紅色",
    engine: "V8",
  },
});

const changeBrand = () => {
  car.brand = "法拉利";
};
const changeColor = () => {
  car.options.color = "藍色";
};
const changeEngine = () => {
  car.options.engine = "V12";
};
</script>

<style scoped>
.content {
  display: flex;
  gap: 20px;
}
.buttonGroup {
  display: flex;
  gap: 10px;
}
</style>
