import { createSignal } from "solid-js";
import "./Blocks.css";

const Blocks = () => {
  const [mousePos, setMousePos] = createSignal<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const handleMouseMove = (e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  return (
    <div
      class="cards flex flex-wrap justify-center gap-2 mx-auto max-w-4xl"
      onMouseMove={(e) => {
        for (const card of document.getElementsByClassName(
          "card"
        ) as HTMLCollectionOf<HTMLElement>) {
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        }
      }}
    >
      <div class="card w-64 h-64 grid place-items-center rounded-lg border"></div>
      <div class="card w-64 h-64 grid place-items-center rounded-lg border"></div>
      <div class="card w-64 h-64 grid place-items-center rounded-lg border"></div>
      <div class="card w-64 h-64 grid place-items-center rounded-lg border"></div>
    </div>
  );
};

export default Blocks;
