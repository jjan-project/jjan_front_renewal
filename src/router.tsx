import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { fetchUserInfo } from "./api/jjan/userController";
import { ChatList, ChatRoom } from "./pages/chat";
import QueryProvider from "./queryProvider";

import { CreateParty } from "@/pages/create-party";
import { Home } from "@/pages/home";
import { Landing } from "@/pages/landing";
import { Loading } from "@/pages/loading";
import { Notifications } from "@/pages/notifications";
import {
  PartyExplore,
  PartyFiler,
  PartyDetail,
  PartyExit,
  PartyJoined,
} from "@/pages/party";
import {
  ProfileEdit,
  ProfileMain,
  ProfileVerification,
  ProfileWatchList,
} from "@/pages/profile";
import { Signin } from "@/pages/signin";
import { Signup } from "@/pages/signup";
import { SignupComplete } from "@/pages/signup-complete";
import { PartyFormProvider } from "@/store/partyStore";
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
    <Route path="/party-detail/:partyId" element={<PartyDetail />} />
    <Route path="/party-exit/:partyId" element={<PartyExit />} />
    <Route path="/party-create" element={<CreateParty />} />
    <Route path="/party-joined/:partyId" element={<PartyJoined />} />
    <Route path="chat-list" element={<ChatList />} />
    <Route path="chat-room/:chatId" element={<ChatRoom />} />
    <Route path="/profile" element={<ProfileMain />} />
    <Route path="/profile-edit" element={<ProfileEdit />} />
    <Route path="/profile-verification" element={<ProfileVerification />} />
    <Route path="/profile-watchlist" element={<ProfileWatchList />} />
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
      <PartyFormProvider>
        <Routes>
          <Route path="/landing" element={<Navigate to="/" />} />
          {loggedInRoutes()}
        </Routes>
      </PartyFormProvider>
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
