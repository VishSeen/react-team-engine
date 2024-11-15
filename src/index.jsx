import React from "react";
import ReactDOM from 'react-dom/client';
import NavBar from "./components/nav-bar";
import BasicsPage from "./pages/basics";
import './style.css';
import 'bulma/css/bulma.css'

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const App = () => {
  const navItems = [
    {
      id: 1,
      name: "Basics",
      href: "/basics"
    },
    {
      id: 2,
      name: "Basics",
      href: "/basics"
    },
    {
      id: 3,
      name: "Basics",
      href: "/basics"
    }
  ]

  return (
    <div>
      <NavBar navItems={navItems} />

      <BasicsPage />
    </div>
  )
}

root.render(<App />);