const ProfileBasicInfo = () => {
  return (
    <div
      class="w-full rounded-md p-4"
      style={{
        "box-shadow":
          "0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%), 0 12px 24px rgb(0 0 0 / 5%)",
      }}
    >
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
      <div class="relative flex flex-col items-center">
        <div>
          <p class="text-center text-gray-400">Other social links</p>
        </div>
        <div class="w-full grid grid-cols-2 gap-2 py-2">
          <button class="p-1 rounded-md bg-gray-100 text-gray-500">
            Facebook
          </button>
          <button class="p-1 rounded-md bg-gray-100 text-gray-500">
            Instagram
          </button>
          <button class="p-1 rounded-md bg-gray-100 text-gray-500">
            Twitter
          </button>
          <button class="p-1 rounded-md bg-gray-100 text-gray-500">
            Youtube
          </button>
          <button class="p-1 rounded-md bg-gray-100 text-gray-500">
            Github
          </button>
          <button class="p-1 rounded-md bg-gray-100 text-gray-500">
            Linkedin
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileBasicInfo;
