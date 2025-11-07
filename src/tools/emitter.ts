import mitt from "mitt";

type Events = {
  "send-car": string;
};

const emitter = mitt<Events>();

export default emitter;
