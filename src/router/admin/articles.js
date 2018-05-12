import ArticleList from "@/components/admin-component/article-page/ArticleList";
import ArticleCreator from "@/components/admin-component/article-page/ArticleCreator";
import ArticlesWraper from "@/components/admin-component/article-page/ArticlesWraper";

export default {
  path: "/admin/dashboard/articles",
  component: ArticlesWraper,
  children: [
    {
      path: "",
      component: ArticleList,
      meta: {
        title: "Статті"
      }
    },
    {
      path: "new",
      component: ArticleCreator,
      meta: {
        title: "Статті"
      }
    },
    {
      path: "edit/:id",
      component: ArticleCreator,
      meta: {
        title: "Статті"
      }
    }
  ]
};
