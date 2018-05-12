import CountriesWraper from "@/components/admin-component/countries-page/CountriesWraper";
import CountriesList from "@/components/admin-component/countries-page/CountriesList";
import CountriesCreator from "@/components/admin-component/countries-page/CountriesCreator";

export default {
  path: "/admin/dashboard/countries/:page",
  component: CountriesWraper,
  children: [
    {
      path: "",
      name: "Admin.Countries.List",
      component: CountriesList,
      meta: {
        title: "Країни"
      }
    },
    {
      path: "new",
      component: CountriesCreator,
      name: "Admin.Countries.New",
      meta: {
        title: "Країни"
      }
    },
    {
      path: "edit/:id",
      component: CountriesCreator,
      name: "Admin.Countries.Creator",
      meta: {
        title: "Країни"
      }
    }
  ]
};
