<template>
  <div>子層</div>
  <ul>
    <li v-for="(p, inedx) in list" :key="p.id">{{ p.name }}--{{ p.age }}</li>
  </ul>

  <div>{{ sum }}</div>
  <button @click="add">plus</button>
</template>

<script lang="ts">
export default {
  name: "Person",
};
</script>

<script setup lang="ts">
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
} from "vue";
import type { Persons } from "./person";
import { useSum } from "./hooks/useSum";

const { sum, add } = useSum();
//接收props
const a = defineProps<{ list?: Persons[] }>();
console.log("a", a.list);

onBeforeMount(() => {});
onMounted(() => {});
onBeforeUpdate(() => {});
onUpdated(() => {});
onBeforeUnmount(() => {});
onUnmounted(() => {});

// withDefaults(defineProps<{ list?: Persons[] }>(), {
//   list: () => [
//     {
//       id: "04",
//       name: "陳六",
//       age: 22,
//     },
//   ],
// });

//接收且可以console.log
// const x = defineProps(["a"]);
// console.log("x", x);
</script>
