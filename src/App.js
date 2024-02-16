import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Recommendation from "./components/Pages/Recommendation";
import DataUpload from "./components/Pages/DataUpload";
import Settings from "./components/Pages/Settings";

const AppRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/recommendation",
          element: <Recommendation/>,
        },
        {
          path: "/dataupload",
          element: <DataUpload />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
      ],
    },
  ]
)
function App() {
  return (
    <div className="App grid grid-cols-6 w-full relative min-h-screen">
      <SideBar />
      <div className="content col-start-2 col-span-5 w-full relative">
        <Header />
        <Outlet/>
      </div>
    </div>
  );
}

export {AppRouter};
