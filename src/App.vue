<template>
  <div>{{ msg }}</div>
  <div class="col-auto row gx-2 align-items-center">
    <button class="col-auto btn btn-primary" @click="minusCount">-</button>
    <div class="col-auto">{{ count }}</div>
    <button class="col-auto btn btn-primary" @click="addCount">+</button>
  </div>
</template>

<script>
export default {
  name: "Hello-world",
  data() {
    return {
      msg: "Hello world123!",
      count: 0,
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
