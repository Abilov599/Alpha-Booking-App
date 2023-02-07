import Home from "../site/pages/home";
import SiteRoot from "./../site/root/index";
import AdminRoot from "./../admin/root/index";
import Rooms from "./../site/pages/rooms/index";

const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "rooms",
        element: <Rooms />,
      },
    ],
  },
  {
    path: "/admin/",
    element: <AdminRoot />,
    children: [],
  },
];

export default ROUTES;
