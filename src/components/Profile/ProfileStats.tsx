const ProfileStats = () => {
  return (
    <div
      class="w-full rounded-md px-6 py-4 flex justify-between items-center"
      style={{
        "box-shadow":
          "0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%), 0 12px 24px rgb(0 0 0 / 5%)",
      }}
    >
      <div class="flex flex-col items-center w-28 gap-2">
        <div class="w-20 h-20 rounded-full flex flex-col justify-center items-center text-gray-500 bg-gray-100">
          <p class="font-semibold text-lg h-6">50</p>
          <p class="text-sm">Articles</p>
        </div>
        <div class="text-sm text-gray-500"><span class="font-semibold">500M</span> Views</div>
      </div>
      <div class="flex flex-col w-52 h-full justify-evenly text-sm px-8 text-gray-500">
        <div><span class="font-semibold">123M</span> Likes</div>
        <div><span class="font-semibold">654k</span> Saves</div>
        <div><span class="font-semibold">513k</span> Comments</div>
        <div><span class="font-semibold">423k</span> Shares</div>
      </div>
    </div>
  );
};

export default ProfileStats;
