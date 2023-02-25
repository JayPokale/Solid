import { createSignal } from "solid-js";
import "./Blocks.css";

const Blocks = () => {
  return (
    <div
      id="cards"
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
      <div class="card max-w-[448px] min-w-[256px] xs:min-w-[320px] flex-1 h-80 2xs:h-96 grid place-items-center rounded-lg border"></div>
      <div class="card max-w-[448px] min-w-[256px] xs:min-w-[320px] flex-1 h-80 2xs:h-96 grid place-items-center rounded-lg border"></div>
      <div class="card max-w-[448px] min-w-[256px] xs:min-w-[320px] flex-1 h-80 2xs:h-96 grid place-items-center rounded-lg border"></div>
      <div class="card max-w-[448px] min-w-[256px] xs:min-w-[320px] flex-1 h-80 2xs:h-96 grid place-items-center rounded-lg border"></div>
    </div>
  );
};

export default Blocks;
