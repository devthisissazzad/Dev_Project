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
import Contact from "../Pages/Contact/Contact";
import H_FromOurMenu from "../components/H_FromOurMenu/H_FromOurMenu";
import FromOurMenu from "../Pages/FromOurMenu/FromOurMenu";

export const routes = createBrowserRouter(
  createRoutesFromElements([
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<FromOurMenu />} />
      </Route>
      <Route>
        <Route path="/login" element={<Login />} />
      </Route>
    </Route>,
  ])
);
