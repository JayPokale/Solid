import { For } from "solid-js";
import "./Blocks.css";

const Blocks = () => {
  const block = [1, 2, 3, 4];
  return (
    <div
      id="cards"
      class="cards flex flex-wrap justify-center gap-2 mx-auto max-w-4xl"
      onMouseMove={(e) => {
        for (const card of document.getElementsByClassName(
          "cardborder"
        ) as HTMLCollectionOf<HTMLElement>) {
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        }
      }}
    >
      <For each={block}>
        {() => (
          <div class="cardborder p-px grid place-items-center rounded-lg relative overflow-hidden max-w-[448px] min-w-[256px] xs:min-w-[320px] flex-1 h-80 2xs:h-96 bg-gray-50">
            <div class="card relative overflow-hidden w-full h-full grid place-items-center rounded-lg bg-gray-50 z-10"></div>
          </div>
        )}
      </For>
    </div>
  );
};

export default Blocks;
