import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import SidebarWithHeader from "./home.tsx";
import SignIn from "./sign-in.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./404.tsx";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <SidebarWithHeader />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);
