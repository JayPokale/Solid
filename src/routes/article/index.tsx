import ArticleMain from "~/components/ArticleMain";
import ProfileBasicInfo from "~/components/Profile/ProfileBasicInfo";

const article = () => {
  return (
    <div class="max-w-screen-2xl mx-auto flex justify-center border-t">
      <ArticleMain />
      <div class="w-80 py-4">
        <ProfileBasicInfo />
      </div>
    </div>
  );
};

export default article;
