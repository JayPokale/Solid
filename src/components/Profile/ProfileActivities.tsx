const ProfileActivities = () => {
  return (
    <main
      class="w-full rounded-md p-4 flex flex-col gap-2"
      style={{
        "box-shadow":
          "0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%), 0 12px 24px rgb(0 0 0 / 5%)",
      }}
    >
      <p class="text-gray-400">
        <span class="font-semibold">Activity:</span> Only visible to you
      </p>
      <div class="flex gap-2 h-20 text-gray-500 px-2 cursor-pointer rounded-md duration-100 hover:bg-gray-100">
        <p class="w-20 grid place-items-center font-semibold text-lg rounded-full bg-gray-100">
          144
        </p>
        <p class="grid place-items-center text-base">You liked</p>
      </div>
      <div class="flex gap-2 h-20 text-gray-500 px-2 cursor-pointer rounded-md duration-100 hover:bg-gray-100">
        <p class="w-20 grid place-items-center font-semibold text-lg rounded-full bg-gray-100">
          25
        </p>
        <p class="grid place-items-center text-base">You saved</p>
      </div>
      <div class="flex gap-2 h-20 text-gray-500 px-2 cursor-pointer rounded-md duration-100 hover:bg-gray-100">
        <p class="w-20 grid place-items-center font-semibold text-lg rounded-full bg-gray-100">
          16
        </p>
        <p class="grid place-items-center text-base">You Followed</p>
      </div>
    </main>
  );
};

export default ProfileActivities;
