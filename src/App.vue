<template>
  <Person a="哈哈" :list="personList" />
  <RouterLink to="/" active-class="" />
  <RouterView />
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Person from "./Test.vue";
import type { Persons } from "./person";
import { RouterView, RouterLink, useRoute } from "vue-router";

const route = useRoute();
console.log("route", route);

const personList: Persons[] = reactive([
  { id: "01", name: "張三", age: 18 },
  { id: "02", name: "李四", age: 19 },
  { id: "03", name: "王五", age: 20 },
]);
</script>
