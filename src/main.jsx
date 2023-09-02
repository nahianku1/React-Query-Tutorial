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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/convention" element={<ConventionalQuery />} />
      <Route path="/rq-query" element={<ReactQuery />} />
    </Route>
  )
);

let queryClient = new QueryClient({
    
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </QueryClientProvider>
);
