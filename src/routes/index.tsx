import { createSignal } from "solid-js";

const index = () => {
  const [i, setI] = createSignal(0);
  setInterval(() => {
    setI((i() + 1) % 3);
  }, 2000);

  return (
    <div class="max-w-6xl flex flex-col items-center mx-auto gap-12 pt-20">
      <div
        class="flex flex-col items-center text-4xl 2xs:text-5xl xs:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
        style={{ "font-family": "Signika" }}
      >
        <p class="drop-shadow-md hidden sm:block">EVERYTHING IS ABOUT</p>
        <p class="drop-shadow-md sm:hidden text-center">
          EVERYTHING
          <br />
          IS ABOUT
        </p>
        <div class="relative w-64 h-max md:h-24 overflow-hidden">
          <span class="select-none">&nbsp;</span>
          <div
            class={`absolute top-0 h-max md:h-24 w-64 grid place-items-center ${
              i() === 0
                ? "translate-y-32"
                : i() === 1
                ? "translate-y-0 duration-1000"
                : "-translate-y-32 duration-1000"
            }`}
          >
            <div>THINK</div>
          </div>
          <div
            class={`absolute top-0 h-max md:h-24 w-64 grid place-items-center ${
              i() === 1
                ? "translate-y-32"
                : i() === 2
                ? "translate-y-0 duration-1000"
                : "-translate-y-32 duration-1000"
            }`}
          >
            <div>CREATE</div>
          </div>
          <div
            class={`absolute top-0 h-max md:h-24 w-64 grid place-items-center ${
              i() === 2
                ? "translate-y-32"
                : i() === 0
                ? "translate-y-0 duration-1000"
                : "-translate-y-32 duration-1000"
            }`}
          >
            <div>EARN</div>
          </div>
        </div>
      </div>
      <h1 class="text-center text-lg text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        placeat id consequuntur mollitia adipisci accusamus officiis maiores
        recusandae fugiat! Pariatur quas, illum nostrum modi doloremque dolore
        sapiente eligendi sit perferendis. Voluptatibus voluptas quibusdam nihil
        autem!
      </h1>
      <div class="flex gap-8 flex-col sm:flex-row">
        <button
          class="w-60 py-2 rounded-lg bg-black text-white"
          style={{ "box-shadow": "0 4px 14px rgb(0 0 0 / 30%)" }}
        >
          Create Post
        </button>
        <button
          class="w-60 py-2 rounded-lg bg-white"
          style={{ "box-shadow": "0 4px 14px 0 rgb(0 0 0 / 10%)" }}
        >
          Explore
        </button>
      </div>

      {/* Trending Categories */}
      <div class="flex flex-wrap gap-8 justify-center w-full place-items-center">
        <button
          class="w-2/5 sm:w-52 aspect-[4/3] rounded-xl duration-300 hover:bg-black/[0.015]"
          style={{
            "box-shadow":
              "0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%), 0 12px 24px rgb(0 0 0 / 5%)",
          }}
        >
          Container 1
        </button>
        <button
          class="w-2/5 sm:w-52 aspect-[4/3] rounded-xl duration-300 hover:bg-black/[0.015]"
          style={{
            "box-shadow":
              "0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%), 0 12px 24px rgb(0 0 0 / 5%)",
          }}
        >
          Container 2
        </button>
        <button
          class="w-2/5 sm:w-52 aspect-[4/3] rounded-xl duration-300 hover:bg-black/[0.015]"
          style={{
            "box-shadow":
              "0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%), 0 12px 24px rgb(0 0 0 / 5%)",
          }}
        >
          Container 3
        </button>
        <button
          class="w-2/5 sm:w-52 aspect-[4/3] rounded-xl duration-300 hover:bg-black/[0.015]"
          style={{
            "box-shadow":
              "0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%), 0 12px 24px rgb(0 0 0 / 5%)",
          }}
        >
          Container 4
        </button>
      </div>
    </div>
  );
};

export default index;
