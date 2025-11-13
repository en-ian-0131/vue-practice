<template>
  <div class="father">
    <div>Father</div>
    <div class="content">
      <Category>
        <template v-slot:game="params">
          <ul>
            <li v-for="g in params.yoxi" :key="g.id">{{ g.name }}</li>
          </ul>
        </template>
      </Category>
      <Category>
        <template #game="params">
          <ol>
            <li v-for="g in params.yoxi" :key="g.id">{{ g.name }}</li>
          </ol>
        </template>
      </Category>
      <Category>
        <template #game="params">
          <h3 v-for="g in params.yoxi" :key="g.id">{{ g.name }}</h3>
        </template>
      </Category>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Father",
};
</script>

<script setup lang="ts">
import Category from "./Category.vue";
</script>

<style scoped>
.father {
  background-color: lightgray;
  border-radius: 10px;
  padding: 7px 10px;
}
.content {
  display: flex;
  justify-content: space-evenly;
}
h2 {
  background-color: orange;
  text-align: center;
  font-weight: 700;
}
</style>
