import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import QueryProvider from "./queryProvider";

import { Landing } from "@/pages/landing";
import { Loading } from "@/pages/loading";
import { Signin } from "@/pages/signin";
import { Signup } from "@/pages/signup";
import { SignupComplete } from "@/pages/signup-complete";
import { SignupProvider } from "@/store/signupStore";

// const 로그인후불러올컴포넌트 = React.lazy(
//   () => import("./pages/로그인후불러올컴포넌트"),
// );

const LoadingSpinner = () => {
  return <Loading />;
};

const authRoutes = () => (
  <Route path="auth">
    <Route path="signin" element={<Signin />} />
    <Route path="signup" element={<Signup />} />
    <Route path="signup-complete" element={<SignupComplete />} />
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
          {/* <Route path="/splash" element={<Splash />} /> */}
          <Route path="/landing" element={<Landing />} />
          <Route path="/loading" element={<Loading />} />
          {authRoutes()}
        </Routes>
      </SignupProvider>
    );
  }

  return (
    <QueryProvider>
      <BrowserRouter>
        {/* <MainNavigation /> */}
        <Suspense fallback={<LoadingSpinner />}>{routes}</Suspense>
        {/* <BottomNavigation /> */}
      </BrowserRouter>
    </QueryProvider>
  );
};

export default Router;
