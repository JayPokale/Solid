const index = () => {
  return (
    <div class="max-w-6xl flex flex-col items-center mx-auto gap-12 pt-20">
      <div
        class="flex flex-col items-center text-8xl font-bold tracking-tight"
        style={{ "font-family": "Signika" }}
      >
        <p class="drop-shadow-md">EVERYTHING IS ABOUT</p>
        <div class="relative w-80 h-24 py-8">
          <div class="absolute top-2 h-28 w-80 bg-red-400"></div>
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
        <button class="w-1/5 aspect-video rounded-xl bg-white shadow-md shadow-black/[0.02] hover:shadow-lg hover:bg-slate-50 duration-300">
          Container3
        </button>
        <button class="w-1/5 aspect-video rounded-xl bg-white shadow-md shadow-black/[0.02] hover:shadow-lg hover:bg-slate-50 duration-300">
          Container3
        </button>
        <button class="w-1/5 aspect-video rounded-xl bg-white shadow-md shadow-black/[0.02] hover:shadow-lg hover:bg-slate-50 duration-300">
          Container3
        </button>
        <button class="w-1/5 aspect-video rounded-xl bg-white shadow-md shadow-black/[0.02] hover:shadow-lg hover:bg-slate-50 duration-300">
          Container3
        </button>
      </div>
    </div>
  );
};

export default index;
