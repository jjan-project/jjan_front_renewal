import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoadingSplash } from "./components/loadingSplash";
import QueryProvider from "./queryProvider";

import SvgLoadingSplash from "@/assets/LoadingSplash.svg";
import { SignupProvider } from "@/store/signupStore";


// const 로그인후불러올컴포넌트 = React.lazy(
//   () => import("./pages/로그인후불러올컴포넌트"),
// );

const authRoutes = () => (
  <Route path="auth">
    <Route path="signin" />
    <Route path="signup">
      <Route path="email" />
      <Route path="nick-name" />
      <Route path="location" />
      <Route path="birthday" />
      <Route path="avatar" />
      <Route path="gender" />
      <Route path="capacity" />
    </Route>
  </Route>
);

const Router = () => {
  let token; // 로그인 여부 확인
  let routes;

  if (token) {
    routes = <Routes>{/* <로그인후불러올컴포넌트 /> */}</Routes>;
  } else {
    routes = (
      <SignupProvider>
        <Routes>
          {/* 
          <Route path="/splash" element={<Splash />} />
          <Route path="/landing" element={<Landing />} />
         */}
          {authRoutes()}
        </Routes>
      </SignupProvider>
    );
  }

  return (
    <QueryProvider>
      <BrowserRouter>
        {/* <MainNavigation /> */}
        <Suspense fallback={<LoadingSplash imageUrl={SvgLoadingSplash} />}>
          {routes}
        </Suspense>
        {/* <BottomNavigation /> */}
      </BrowserRouter>
    </QueryProvider>
  );
};

export default Router;
