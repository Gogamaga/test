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
      name: "Admin.System.List",
      meta: {
        title: "Системи"
      }
    },
    {
      path: "new",
      component: SystemsCreator,
      name: "Admin.System.New",
      meta: {
        title: "Системи"
      }
    },
    {
      path: "edit/:id",
      component: SystemsCreator,
      name: "Admin.System.Edit",
      meta: {
        title: "Системи"
      }
    }
  ]
};
