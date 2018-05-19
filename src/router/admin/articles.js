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
      name: "Admin.Articles.List",
      meta: {
        title: "Статті"
      }
    },
    {
      path: "new",
      component: ArticleCreator,
      name: "Admin.Articles.New",
      meta: {
        title: "Статті"
      }
    },
    {
      path: "edit/:id",
      component: ArticleCreator,
      name: "Admin.Articles.Edit",
      meta: {
        title: "Статті"
      }
    }
  ]
};
