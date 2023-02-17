import { createSignal, JSXElement } from "solid-js";

const temp = () => {
  const [arr, setArr] = createSignal([
    <div class="h-10 w-10 bg-red-400"></div>,
    <div class="h-10 w-10 bg-blue-400"></div>,
    <div class="h-10 w-10 bg-green-400"></div>,
  ])
  setInterval(() => {
    let x = arr()
    setArr([x[1],x[2],x[0]])
  }, 1000);
  return <div>{...arr()}</div>;
};

export default temp;
