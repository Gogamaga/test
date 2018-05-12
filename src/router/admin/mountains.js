import MountainCreator from "@/components/admin-component/mountains-page/MountainCreator";
import MountainsList from "@/components/admin-component/mountains-page/MountainsList";
import MountainsWraper from "@/components/admin-component/mountains-page/MountainsWraper";

export default {
  path: "mountains",
  component: MountainsWraper,
  children: [
    {
      path: "",
      component: MountainsList,
      name: "Admin.Mountains.List",
      meta: {
        title: "Гори"
      }
    },
    {
      path: "new",
      component: MountainCreator,
      name: "Admin.Mountains.New",
      meta: {
        title: "Гори"
      }
    },
    {
      path: "edit/:id",
      component: MountainCreator,
      name: "Admin.Mountains.Edit",
      meta: {
        title: "Гори"
      }
    }
  ]
};
