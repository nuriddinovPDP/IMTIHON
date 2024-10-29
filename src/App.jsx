import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Popular from "./components/Popular/Popular";
import TopRated from "./components/TopRated/TopRated";
import UpComing from "./components/UpComing/UpComing";
import Header from "./pages/Header/Header";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/popular",
      element: <Popular />,
    },
    {
      path: "/toprated",
      element: <TopRated />,
    },
    {
      path: "/upcoming",
      element: <UpComing />,
    },
  ]);

  return (
    <div>
      {/* <Header /> */}

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
