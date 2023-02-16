const index = () => {
  return (
    <div class="max-w-6xl flex flex-col items-center mx-auto gap-12 pt-20">
      <div class="flex flex-col items-center text-8xl font-bold tracking-tight">
        <p>EVERYTHING IS ABOUT</p>
        <p>WRITE</p>
      </div>
      <h1 class="text-center text-lg text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat id consequuntur mollitia adipisci accusamus officiis maiores recusandae fugiat! Pariatur quas, illum nostrum modi doloremque dolore sapiente eligendi sit perferendis. Voluptatibus voluptas quibusdam nihil autem!
      </h1>
      <div class="flex gap-8">
        <button class="w-60 py-2 rounded-lg text-lg duration-100 shadow-md shadow-black/10 hover:shadow-lg bg-black text-white">Create Post</button>
        <button class="w-60 py-2 rounded-lg text-lg duration-100 shadow-md shadow-black/10 hover:shadow-lg bg-white">Explore</button>
      </div>
      <div class="flex w-full justify-evenly">
          <button class="w-1/5 aspect-video rounded-xl shadow-md shadow-black/[0.02] border-2 border-black/5 hover:bg-black/[0.02] duration-200">Container1</button>
          <button class="w-1/5 aspect-video rounded-xl shadow-md shadow-black/[0.02] border-2 border-black/5 hover:bg-black/[0.02] duration-200">Container2</button>
          <button class="w-1/5 aspect-video rounded-xl shadow-md shadow-black/[0.02] border-2 border-black/5 hover:bg-black/[0.02] duration-200">Container3</button>
          <button class="w-1/5 aspect-video rounded-xl shadow-md shadow-black/[0.02] border-2 border-black/5 hover:bg-black/[0.02] duration-200">Container4</button>
      </div>
    </div>
  );
};

export default index;
