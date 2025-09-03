<template>
  <div class="flex justify-center">
    <div class="w-[30%] flex flex-col gap-[.5rem]">
      <div class="flex flex-col gap-[.5rem]">
        <h1 class="font-semibold">HTML</h1>
        <div>{{ msg }}</div>
        <div>{{ rawHtml }}</div>
        <div v-html="rawHtml"></div>
      </div>
      <hr />
      <div>
        <h1 class="font-semibold">counter</h1>
        <div class="flex gap-[1rem] items-center">
          <button
            class="w-[1.5rem] rounded-[0.3rem] bg-[#1E90FF] text-[#FFF]"
            @click="minusCount"
          >
            -
          </button>
          <div>{{ count }}</div>
          <button
            class="w-[1.5rem] rounded-[0.3rem] bg-[#1E90FF] text-[#FFF]"
            @click="addCount"
          >
            +
          </button>
        </div>
      </div>
      <hr />
      <div>
        <h1 class="font-semibold">v-bind</h1>
        <div v-bind:id="customId1">custom id 1</div>
        <div :id="customId2">custom id 2</div>
        <div :id="customId3">custom id 3</div>
      </div>
      <hr />
      <div>
        <h1 class="font-semibold">v-model</h1>
        <div class="flex gap-[1rem] flex-wrap">
          <div class="border-[#3643f8] border-[1px] border-solid">
            <h3>input</h3>
            <input type="text" v-model="inputValue" class="bg-[#bbbbbb]" />
            <div>{{ inputValue }}</div>
          </div>
          <div class="border-[#3643f8] border-[1px] border-solid">
            <h3>radio</h3>
            <div class="d-flex">
              <div>
                <input
                  type="radio"
                  name="radio1"
                  id="radio1"
                  value="1"
                  v-model="picked"
                />
                <label for="radio1">radio1</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="radio2"
                  id="radio2"
                  value="2"
                  v-model="picked"
                />
                <label for="radio2">radio2</label>
              </div>
            </div>
            <div>{{ picked }}</div>
          </div>
          <div class="border-[#3643f8] border-[1px] border-solid">
            <h3>checkBox</h3>
            <div class="form-check">
              <input
                type="checkbox"
                name="123"
                id="123"
                v-model="checked"
                class="form-check-input"
              />
              <label for="123" class="form-check-label">123</label>
              <div>{{ checked }}</div>
            </div>
          </div>
          <div class="border-[#3643f8] border-[1px] border-solid">
            <h3>checkBoxes</h3>
            <div>
              <div>
                <input type="checkbox" value="1" id="1" v-model="checkboxes" />
                <label for="1">1</label>
              </div>
              <div>
                <input type="checkbox" value="2" id="2" v-model="checkboxes" />
                <label for="2">2</label>
              </div>
              <div>
                <input type="checkbox" value="3" id="3" v-model="checkboxes" />
                <label for="3">3</label>
              </div>
              <div>
                <input type="checkbox" value="4" id="4" v-model="checkboxes" />
                <label for="4">4</label>
              </div>
              <div>
                <input type="checkbox" value="5" id="5" v-model="checkboxes" />
                <label for="5">5</label>
              </div>
              <div>
                <input type="checkbox" value="6" id="6" v-model="checkboxes" />
                <label for="6">6</label>
              </div>
            </div>
            <div>{{ checkboxes }}</div>
          </div>
          <div class="border-[#3643f8] border-[1px] border-solid">
            <h3>select</h3>
            <select v-model="selected">
              <option disabled value="">Please select one</option>
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="cherry">Cherry</option>
            </select>
            <div>{{ selected }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const msg = ref<string>("Hello world");
const rawHtml = ref<string>(
  '<span style="color:red">This should be red. </span>'
);
const count = ref<number>(0);

const minusCount = () => {
  if (count.value > 0) count.value = count.value - 1;
};
const addCount = () => (count.value += 1);

const customId1 = ref<string>("custom-id1");
const customId2 = ref<string>("custom-id2");
const customId3 = ref(undefined); // "" 還是有id attribute，null 跟 undefined 沒有
const inputValue = ref<string>("");
const picked = ref<number>(1);
const checked = ref<boolean>(false);
const checkboxes = ref<string[]>([]);
const selected = ref<string>("");
</script>
