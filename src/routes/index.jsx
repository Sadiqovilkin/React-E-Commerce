import AddCategory from "../pages/Admin/AddCategory/AddCategory";
import AddProduct from "../pages/Admin/AddProduct/AddProduct";
import AdminRoot from "../pages/Admin/AdminRoot";
import Categorys from "../pages/Admin/Categorys/Categorys";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Login from "../pages/Admin/Login/Login";
import Messages from "../pages/Admin/Messages/Messages";
import Orders from "../pages/Admin/Orders/Orders";
import Products from "../pages/Admin/Products/Products";
import Users from "../pages/Admin/Users/Users";
import Basket from "../pages/Client/Basket/Basket";
import ClientLogin from "../pages/Client/ClientLogin/ClientLogin";
import ClientProducts from "../pages/Client/ClientProducts/ClientProducts";
import ClientRegister from "../pages/Client/ClientRegister/ClientRegister";
import ClientRoot from "../pages/Client/ClientRoot";
import ContactUs from "../pages/Client/ContactUs/ContactUs";
import Home from "../pages/Client/Home/Home";
import ProductDetail from "../pages/Client/ProductDetail/ProductDetail";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const ROUTES = [
  //admin root
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "add-category",
        element: < AddCategory/>,
      },
      {
        path: "categorys",
        element: <Categorys />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "messages",
        element: <Messages/>,
      },
    ],
  },
  //client root
  {
    path: "/",
    element: <ClientRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "login",
        element: <ClientLogin />,
      },
      {
        path: "register",
        element: <ClientRegister />,
      },
      {
        path: "clientproducts",
        element: <ClientProducts />,
      },
      {
        path: "clientproducts/:id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path:"*",
    element: <ErrorPage/>
  }
];
