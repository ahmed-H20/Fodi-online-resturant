import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/hame/Home";
import Menu from "../pages/shop/Menu";
import Signup from "../components/Signup";
import PrivateRouter from "../PrivateRoter/PrivateRouter";
import CartPage from "../pages/shop/CartPage";

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
        }
      ]
    },
    {
      path: "/signup",
      element: <Signup/>
    }
  ]);

export default router;