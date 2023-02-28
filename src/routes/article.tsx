import ArticleAside from "~/components/ArticleAside";
import ArticleMain from "~/components/ArticleMain";

const article = () => {
  return (
    <div class="max-w-6xl mx-auto flex justify-center border-t">
      <ArticleMain />
      <ArticleAside />
    </div>
  );
};

export default article;
