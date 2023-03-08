import ExploreList from "~/components/ExploreList";
import ProfileAbout from "~/components/Profile/ProfileAbout";
import ProfileActivities from "~/components/Profile/ProfileActivities";
import ProfileBasicInfo from "~/components/Profile/ProfileBasicInfo";
import ProfileStats from "~/components/Profile/ProfileStats";

const profile = () => {
  return (
    <div class="max-w-screen-2xl w-full mx-auto flex justify-center">
      <div class="w-full flex flex-wrap md:flex-nowrap justify-center gap-4 my-4">
        <div class="w-full md:w-80 h-max flex flex-col gap-4">
          <ProfileBasicInfo />
          <ProfileStats />
          <ProfileActivities />
        </div>
        <div class="flex flex-col gap-2">
          <ProfileAbout />
          <ExploreList />
        </div>
      </div>
    </div>
  );
};

export default profile;
