import { createSignal } from "solid-js";

const index = () => {
  const [i, setI] = createSignal(0);
  setInterval(() => {
    setI((i() + 1) % 3);
  }, 2000);

  return (
    <div class="max-w-6xl flex flex-col items-center mx-auto gap-12 pt-20">
      <div
        class="flex flex-col items-center text-8xl font-bold tracking-tight"
        style={{ "font-family": "Signika" }}
      >
        <p class="drop-shadow-md">EVERYTHING IS ABOUT</p>
        <div class="relative w-96 h-24 py-8 overflow-hidden">
          <div
            class={`absolute top-2 h-24 w-80 grid place-items-center ${
              i() === 0
                ? "translate-y-32"
                : i() === 1
                ? "translate-y-0 duration-500"
                : "-translate-y-32 duration-500"
            }`}
          >
            <div>THINK</div>
          </div>
          <div
            class={`absolute top-2 h-24 w-80 grid place-items-center ${
              i() === 1
                ? "translate-y-32"
                : i() === 2
                ? "translate-y-0 duration-500"
                : "-translate-y-32 duration-500"
            }`}
          >
            <div>WRITE</div>
          </div>
          <div
            class={`absolute top-2 h-24 w-80 grid place-items-center ${
              i() === 2
                ? "translate-y-32"
                : i() === 0
                ? "translate-y-0 duration-500"
                : "-translate-y-32 duration-500"
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
      <div class="flex gap-8">
        <button class="w-60 py-2 rounded-lg text-lg duration-100 shadow-md shadow-black/10 hover:shadow-lg bg-black text-white">
          Create Post
        </button>
        <button class="w-60 py-2 rounded-lg text-lg duration-100 shadow-md shadow-black/10 hover:shadow-lg bg-white">
          Explore
        </button>
      </div>
      <div class="flex w-full justify-evenly">
        <button class="w-1/5 aspect-video rounded-xl shadow-md shadow-black/[0.02] hover:shadow-lg duration-300">
          Container 1
        </button>
        <button class="w-1/5 aspect-video rounded-xl shadow-md shadow-black/[0.02] hover:shadow-lg duration-300">
          Container 2
        </button>
        <button class="w-1/5 aspect-video rounded-xl shadow-md shadow-black/[0.02] hover:shadow-lg duration-300">
          Container 3
        </button>
        <button class="w-1/5 aspect-video rounded-xl shadow-md shadow-black/[0.02] hover:shadow-lg duration-300">
          Container 4
        </button>
      </div>
    </div>
  );
};

export default index;
