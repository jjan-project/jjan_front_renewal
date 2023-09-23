import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Loading } from "./pages/loading";
import QueryProvider from "./queryProvider";
import { Router } from "./router";

import "./style/global.css";
import "./style/font.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Router />
        </Suspense>
      </BrowserRouter>
    </QueryProvider>
  </React.StrictMode>,
);
