<template>
  <input
    type="text"
    :value="account"
    @input="emit('update:account', (<HTMLInputElement>$event.target).value)"
  />
  <br />
  <input
    type="text"
    :value="pwd"
    @input="emit('update:pwd', (<HTMLInputElement>$event.target).value)"
  />
</template>

<script lang="ts">
export default {
  name: "IanInput",
};
</script>

<script setup lang="ts">
defineProps(["account", "pwd"]);
const emit = defineEmits(["update:account", "update:pwd"]);
</script>

<style scoped>
input {
  border: 1px solid black;
  background: linear-gradient(45deg, red, yellow, green);
  border-radius: 10px;
  padding: 7px 10px;
  color: #fff;
}
</style>
