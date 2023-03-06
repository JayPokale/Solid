const ArticleAside = () => {
  return (
    <div class="w-full p-4 border-b">
      <div class="flex flex-wrap gap-4">
        <img
          src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
          alt="name here"
          class="w-24 h-24 rounded-xl"
        />
        <div class="flex flex-col justify-evenly font-medium">
          <p class="max-w-[176px]">Name of the Writer</p>
          <p class="max-w-[176px] text-sm text-gray-600">Username</p>
          <div class="max-w-[176px] flex items-baseline gap-1">
            <p class="text-xl text-black font-semibold">5k</p>
            <p class="text-sm text-gray-600 font-medium">Followers</p>
          </div>
          <p class="max-w-[176px] text-sm text-gray-600">
            From: <span class="text-black">India</span>
          </p>
        </div>
      </div>
      <div class="py-4">
        <button class="w-full py-1 rounded-md text-green-600 bg-green-50">
          Follow
        </button>
      </div>
      <div>
        <p class="text-sm text-gray-500">
          Web Developer | Writer
          <br />
          About section or Short Intro
        </p>
      </div>
    </div>
  );
};

export default ArticleAside;
