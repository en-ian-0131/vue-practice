<template>
  <div class="container">
    <div>{{ msg }}</div>
    <div class="col-auto row gx-2 align-items-center">
      <button class="col-auto btn btn-primary" @click="minusCount">-</button>
      <div class="col-auto">{{ count }}</div>
      <button class="col-auto btn btn-primary" @click="addCount">+</button>
    </div>
    <hr />
    <h1>v-bind</h1>
    <div v-bind:id="customId1">customId1</div>
    <div :id="customId2">customId2</div>
    <hr />
    <h1>v-model</h1>
    <div class="row gx-4">
      <div class="col-auto border border-primary">
        <h3>input</h3>
        <input type="text" v-model="inputValue" class="col-auto form-control" />
        <div>{{ inputValue }}</div>
      </div>
      <div class="col-auto border border-primary">
        <h3>radio</h3>
        <div class="d-flex">
          <div class="col-auto d-flex align-items-center form-check">
            <input
              type="radio"
              name="radio"
              id="radio1"
              value="1"
              class="form-check-input"
              v-model="picked"
            />
            <label for="radio1" class="form-check-label">radio1</label>
          </div>
          <div class="col-auto d-flex align-items-center form-check">
            <input
              type="radio"
              name="radio"
              id="radio2"
              value="2"
              class="form-check-input"
              v-model="picked"
            />
            <label for="radio2" class="form-check-label">radio2</label>
          </div>
        </div>
        <div>{{ picked }}</div>
      </div>
      <div class="col-auto border border-primary">
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
      <div class="col-auto border border-primary">
        <h3>checkBoxes</h3>
        <div class="row gx-3">
          <div class="col-auto">
            <input type="checkbox" value="1" id="1" v-model="checkboxes" />
            <label for="1">1</label>
          </div>
          <div class="col-auto">
            <input type="checkbox" value="2" id="2" v-model="checkboxes" />
            <label for="2">2</label>
          </div>
          <div class="col-auto">
            <input type="checkbox" value="3" id="3" v-model="checkboxes" />
            <label for="3">3</label>
          </div>
          <div class="col-auto">
            <input type="checkbox" value="4" id="4" v-model="checkboxes" />
            <label for="4">4</label>
          </div>
          <div class="col-auto">
            <input type="checkbox" value="5" id="5" v-model="checkboxes" />
            <label for="5">5</label>
          </div>
          <div class="col-auto">
            <input type="checkbox" value="6" id="6" v-model="checkboxes" />
            <label for="6">6</label>
          </div>
        </div>
        <div>{{ checkboxes }}</div>
      </div>
      <div class="col-auto border border-primary">
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
</template>

<script>
export default {
  name: "Hello-world",
  data() {
    return {
      msg: "Hello world123!",
      count: 0,
      customId1: "custom-id1",
      customId2: "custom-id2",
      inputValue: "",
      picked: 1,
      checked: false,
      checkboxes: [],
      selected: "",
    };
  },
  methods: {
    addCount() {
      this.count = this.count + 1;
    },
    minusCount() {
      if (this.count > 0) {
        this.count = this.count - 1;
      }
    },
  },
};
</script>
