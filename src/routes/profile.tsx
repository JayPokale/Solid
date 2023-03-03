import ProfileActivities from "~/components/Profile/ProfileActivities";
import ProfileBasicInfo from "~/components/Profile/ProfileBasicInfo";
import ProfileStats from "~/components/Profile/ProfileStats";

const profile = () => {
  return (
    <div class="max-w-screen-2xl w-full mx-auto flex flex-wrap justify-center">
      <div class="w-full flex justify-center gap-4 my-4">
        <div class="w-full xs:w-80 flex flex-col gap-4">
          <ProfileBasicInfo />
          <ProfileStats />
          <ProfileActivities />
        </div>
      </div>
    </div>
  );
};

export default profile;
