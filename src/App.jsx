import Loading from "./components/loading/Loading";
import Error from "./pages/error/Error";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Error />} />
      <Route path="/loading" element={<Loading />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
