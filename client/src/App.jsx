import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/index";

const router = createBrowserRouter(ROUTES);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
