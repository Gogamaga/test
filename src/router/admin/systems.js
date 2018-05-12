import SystemsWraper from "@/components/admin-component/systems-page/SystemsWraper";
import SystemsList from "@/components/admin-component/systems-page/SystemsList";
import SystemsCreator from "@/components/admin-component/systems-page/SystemsCreator";

export default {
  path: "/admin/dashboard/systems",
  component: SystemsWraper,
  children: [
    {
      path: "",
      component: SystemsList,
      meta: {
        title: "Системи"
      }
    },
    {
      path: "new",
      component: SystemsCreator,
      meta: {
        title: "Системи"
      }
    },
    {
      path: "edit/:id",
      component: SystemsCreator,
      meta: {
        title: "Системи"
      }
    }
  ]
};
