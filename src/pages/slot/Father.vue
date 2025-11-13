<template>
  <div class="father">
    <div>Father</div>
    <div class="content">
      <Category>
        <template v-slot:s2>
          <ul v-for="g in games" :key="g.id">
            <li>{{ g.name }}</li>
          </ul>
        </template>
        <template v-slot:s1>
          <h2>熱門遊戲列表</h2>
        </template>
      </Category>
      <Category>
        <template v-slot:s2>
          <img :src="imgUrl" alt="" />
        </template>
        <template v-slot:s1>
          <h2>今日美食城市</h2>
        </template>
      </Category>
      <Category>
        <template #s2>
          <video :src="videoUrl" controls />
        </template>
        <template #s1>
          <h2>今日影視推薦</h2>
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
import { reactive, ref } from "vue";
import Category from "./Category.vue";
import video from "@/assets/video/bosu_tutorial.mp4";

let games = reactive([
  {
    id: "1",
    name: "英雄聯盟",
  },
  {
    id: "2",
    name: "寶可夢",
  },
  {
    id: "3",
    name: "馬力歐賽車",
  },
  {
    id: "4",
    name: "海賊無雙",
  },
]);

let imgUrl = ref(
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVoFLIWAsdWJWF_2YdZlA46g_EU_H-qGNaQ&s"
);
let videoUrl = ref(video);
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
img,
video {
  width: 100%;
}
h2 {
  background-color: orange;
  text-align: center;
  font-weight: 700;
}
</style>
