import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/nav-bar";
import BasicsPage from "./pages/basics";
import StatesPage from "./pages/states";

import "bulma/css/bulma.css";
import { PAGES } from "./constants/constants";
import "./styles/globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ApiPage from "./pages/api";
import ErrorPage from "./pages/error";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const App = () => {
  const navItems = [
    {
      id: 1,
      name: "Basics",
      href: PAGES.BASICS,
    },
    {
      id: 2,
      name: "States",
      href: PAGES.STATES,
    },
    {
      id: 3,
      name: "Api",
      href: PAGES.API,
    },
    {
      id: 4,
      name: "Hooks",
      href: PAGES.HOOKS,
    },
    {
      id: 5,
      name: "Legacy React",
      href: PAGES.LEGACY,
    },
  ];

  const router = createBrowserRouter([
    {
      path: PAGES.BASICS,
      element: <BasicsPage />,
    },
    {
      path: PAGES.STATES,
      element: <StatesPage />,
    },
    {
      path: PAGES.API,
      element: <ApiPage />,
    },
  ]);

  return (
    <div>
      <NavBar navItems={navItems} />

      <RouterProvider router={router} errorElement={<ErrorPage />} />
    </div>
  );
};

root.render(<App />);
