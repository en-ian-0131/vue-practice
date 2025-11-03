import { ref } from "vue";

export const useSum = () => {
  const sum = ref(0);

  const add = () => {
    sum.value += 1;
  };

  return { sum, add };
};
