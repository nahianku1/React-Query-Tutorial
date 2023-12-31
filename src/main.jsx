import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import ConventionalQuery from "./components/ConventionalQuery.jsx";
import ReactQuery from "./components/ReactQuery.jsx";
let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/convention" element={<ConventionalQuery />} />
      <Route path="/rq-query" element={<ReactQuery />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
