import { createSignal } from "solid-js";

const temp = () => {
  const [i, setI] = createSignal(0);
  setInterval(() => {
    setI((i() + 1) % 3);
    console.log(i());
  }, 2000);
  return (
    <div
      class={`h-20 w-20 bg-red-400 ${
        i() === 0
          ? "translate-x-0"
          : i() === 1
          ? "translate-x-32 duration-500"
          : "translate-x-64 duration-500"
      }`}
    ></div>
  );
};

export default temp;
