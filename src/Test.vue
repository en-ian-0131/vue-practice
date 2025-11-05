<template>
  <div>子層</div>
  <ul>
    <li v-for="(p, inedx) in list" :key="p.id">{{ p.name }}--{{ p.age }}</li>
  </ul>

  <div>{{ sum }}</div>
  <button @click="increatment">plus</button>
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
import { useCountStore } from "./store/count";
import { storeToRefs } from "pinia";

const countStore = useCountStore();
const { sum } = storeToRefs(countStore);

const increatment = () => {
  countStore.sum += 1;
};
//當store數據生變化時觸發
countStore.$subscribe((mutate, state) => {
  console.log("countStore數據生變化時觸發", mutate, state);
});

// const { sum, add } = useSum();
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
