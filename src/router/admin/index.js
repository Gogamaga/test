import Admin from "@/components/admin-component/Admin";
import DashBoard from "@/components/admin-component/DashBoard";

import login from "@/router/admin/login";
import countries from "@/router/admin/countries";
import systems from "@/router/admin/systems";
import articles from "@/router/admin/articles";
import mountains from "@/router/admin/mountains";
import video from "@/router/admin/video";

export default {
  path: "/admin",
  component: Admin,

  children: [
    login,
    {
      path: "dashboard",
      component: DashBoard,
      children: [mountains, articles, countries, systems, video]
    }
  ]
};
