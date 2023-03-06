import ArticleAside from "~/components/Article/ArticleAside";
import ArticleMain from "~/components/Article/ArticleMain";

const article = () => {
  return (
    <div class="max-w-screen-2xl mx-auto flex justify-center">
      <div class="border-r">
        <ArticleMain />
      </div>
      <div class="w-80 py-4 hidden lg:block sticky top-14 h-max">
        <ArticleAside />
      </div>
    </div>
  );
};

export default article;
