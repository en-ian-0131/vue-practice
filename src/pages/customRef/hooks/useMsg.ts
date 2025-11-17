import { customRef } from "vue";

export default function (initVal: string, delay: number) {
  let timer = 0;
  let msg = customRef((track, trigger) => {
    return {
      get() {
        track();
        return initVal;
      },
      set(value) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          initVal = value;
          trigger();
        }, delay);
      },
    };
  });
  return { msg };
}
