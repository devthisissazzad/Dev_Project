import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import ContactUs from "../Pages/ContactUs/ContactUs";

export const routes = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact_us" element={<ContactUs />} />
    </Route>,
  ])
);
