import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { fetchUserInfo } from "./api/jjan/userController";
import QueryProvider from "./queryProvider";

import { Home } from "@/pages/home";
import { Landing } from "@/pages/landing";
import { Loading } from "@/pages/loading";
import { Notifications } from "@/pages/notifications";
import { PartyExplore, PartyFiler } from "@/pages/party";
import { Signin } from "@/pages/signin";
import { Signup } from "@/pages/signup";
import { SignupComplete } from "@/pages/signup-complete";
import { SignupProvider } from "@/store/signupStore";

const authRoutes = () => (
  <Route path="auth">
    <Route path="signin" element={<Signin />} />
    <Route path="signup" element={<Signup />} />
    <Route path="signup-complete" element={<SignupComplete />} />
  </Route>
);

const loggedInRoutes = () => (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/notifications" element={<Notifications />} />
    <Route path="/party-explore" element={<PartyExplore />} />
    <Route path="/party-filter" element={<PartyFiler />} />
  </>
);

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const onLoggendIn = async () => {
    try {
      await fetchUserInfo();
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error while verifying JWT Token", error);
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    onLoggendIn();
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/landing" element={<Navigate to="/" />} />
        {loggedInRoutes()}
      </Routes>
    );
  } else {
    routes = (
      <>
        <SignupProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/landing" />} />
            <Route path="/landing" element={<Landing />} />
            {authRoutes()}
          </Routes>
        </SignupProvider>
      </>
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
