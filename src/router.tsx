import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import QueryProvider from "./queryProvider";

import { Home } from "@/pages/home";
import { Landing } from "@/pages/landing";
import { Loading } from "@/pages/loading";
import { Signin } from "@/pages/signin";
import { Signup } from "@/pages/signup";
import { SignupComplete } from "@/pages/signup-complete";
import { SignupProvider } from "@/store/signupStore";

// const 로그인후불러올컴포넌트 = React.lazy(
//   () => import("./pages/로그인후불러올컴포넌트"),
// );

const authRoutes = () => (
  <Route path="auth">
    <Route path="signin" element={<Signin />} />
    <Route path="signup" element={<Signup />} />
    <Route path="signup-complete" element={<SignupComplete />} />
  </Route>
);

const loggedInRoutes = () => <Route path="/" element={<Home />} />;

const Router = () => {
  let token; // 로그인 여부 확인
  let routes;

  if (token) {
    routes = <Routes>{loggedInRoutes()}</Routes>;
  } else {
    routes = (
      <SignupProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/landing" />} />
          <Route path="/landing" element={<Landing />} />
          {authRoutes()}
        </Routes>
      </SignupProvider>
    );
  }

  return (
    <QueryProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>{routes}</Suspense>
      </BrowserRouter>
    </QueryProvider>
  );
};

export default Router;
