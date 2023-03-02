const ProfileHead = () => {
  return (
    <div class="max-w-screen-2xl w-full flex justify-center mx-auto gap-4 my-4">
      <div
        class="max-w-xs w-full h-80 rounded-md p-4"
        style={{
          "box-shadow":
            "0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%), 0 12px 24px rgb(0 0 0 / 5%)",
        }}
      >
        <div class="flex flex-wrap gap-4">
          <img
            src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
            alt="name here"
            class="w-20 h-20 rounded-xl"
          />
          <div class="h-20 flex flex-col justify-evenly font-medium">
            <p>Name of the Writer</p>
            <p class="text-sm text-gray-600">Username</p>
            <div class="flex items-baseline gap-1">
              <p class="text-xl text-black font-semibold">5k</p>
              <p class="text-sm text-gray-600 font-medium">Followers</p>
            </div>
          </div>
        </div>
        <div class="py-4">
          <button class="w-full py-1 rounded-md text-green-600 bg-green-50">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHead;
