const ArticleAside = () => {
  return (
    <div class="w-80 h-80 px-6 py-4 flex flex-col gap-4">
      <div class="flex gap-3 items-center">
        <img
          src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
          alt="name here"
          class="w-16 h-16 rounded-full"
        />
        <div class="flex flex-col justify-center">
          <p class="font-semibold">Name of the writer</p>
          <p class="text-sm text-gray-500">12.5k followers</p>
          <p class="text-sm">Icons will show up here</p>
        </div>
      </div>
      <div class="flex items-center gap-4 text-sm">
        <button class="cursor-pointer w-1/2">Follow</button>
        <button class="cursor-pointer w-1/2">Visit</button>
      </div>
    </div>
  );
};

export default ArticleAside;
