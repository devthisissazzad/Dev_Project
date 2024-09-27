import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import LoginUserLayout from "../Layouts/LoginUserLayout";

export const routes = createBrowserRouter(
  createRoutesFromElements([
    <Route>
      <Route element={<LoginUserLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Route>,
  ])
);
