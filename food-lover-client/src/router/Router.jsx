import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/hame/Home";
import Menu from "../pages/shop/Menu";
import Signup from "../components/Signup";
import PrivateRouter from "../PrivateRoter/PrivateRouter";
import CartPage from "../pages/shop/CartPage";
import UserProfile from "../pages/dashboard/UserProfile";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import Users from "../pages/dashboard/admin/Users";
import AddMenu from "../pages/dashboard/admin/AddMenu";
import ManageItems from "../pages/dashboard/admin/ManageItems";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path:"/cart_page",
          element:<CartPage/>
        },
        {
          path:"/profile",
          element:<PrivateRouter><UserProfile/></PrivateRouter>
        }
      ]
    },
    {
      path: "/signup",
      element: <Signup/>
    },
    {
      path:"/dashboard",
      element: <PrivateRouter><Dashboard/></PrivateRouter>,
      children:[
        {
          path: "/dashboard/users",
          element: <Users/>
        },
        {
          path: "/dashboard/add-menu",
          element: <AddMenu/>
        },
        {
          path: "/dashboard/manage-items",
          element: <ManageItems/>
        }
      ]
    }
  ]);

export default router;