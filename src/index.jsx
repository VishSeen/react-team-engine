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
import FormPage from "./pages/forms";
import { Provider } from "./context/BookContext";

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
      name: "Forms",
      href: PAGES.FORMS,
    },
    {
      id: 5,
      name: "Hooks",
      href: PAGES.HOOKS,
    },
    {
      id: 6,
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
    {
      path: PAGES.FORMS,
      element: <FormPage />,
    },
  ]);

  return (
    <Provider value={{ id: 1, title: "Test" }}>
      <NavBar navItems={navItems} />

      <RouterProvider router={router} errorElement={<ErrorPage />} />
    </Provider>
  );
};

root.render(<App />);
