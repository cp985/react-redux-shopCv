import {
  createBrowserRouter,
  RouterProvider,
  HashRouter,
  createHashRouter,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NewsLetterContact from "./pages/NewsletterContact";
import AccountUser from "./pages/AccountUser";
import ErrorPage from "./components/general/ErrorPage";
import WrapperLayoutMainNav from "./components/general/WrapperLayoutMainNav";
import MainPageShop from "./pages/MainPageShop";

import {loaderToken} from './pages/Home'
const router = createHashRouter(
  [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      id: "root",
      loader:loaderToken,
      children: [
        {
          element: <WrapperLayoutMainNav />,
          children: [
            {
              index: true,
              element: <MainPageShop />,
            },

            {
              path: "cart",
              element: <Cart />,
            },
            {
              path: "newsLetterContact",
              element: <NewsLetterContact />,
            },
            {
              path: "accountUser",
              element: <AccountUser />,
            },
          ],
        },
      ],
    },
  ],
  //!usare solo con createBrowserRouter
  // {
  //   basename: "/react-tanstack-shop/",
  // }
);

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
