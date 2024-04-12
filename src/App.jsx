import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Landing, Saved, Trending } from "./pages";
import CryptoDetails from "./components/CryptoDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
        children: [
          {
            path: ":coinId",
            element: <CryptoDetails />,
          },
        ],
      },
      {
        path: "/trending",
        element: <Trending />,
        children: [
          {
            path: ":coinId",
            element: <CryptoDetails />,
          },
        ],
      },
      { path: "/saved", element: <Saved /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
