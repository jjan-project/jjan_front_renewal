import { Navigate } from "react-router-dom";

import { AuthRoute, Routes } from "./types";

import { ChatList, ChatRoom } from "@/pages/chat";
import { CreateParty } from "@/pages/create-party";
import { Home } from "@/pages/home";
import { Landing } from "@/pages/landing";
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

const routes: Routes = [
  {
    path: "/landing",
    element: <Landing />,
    isPublic: true,
  },
  {
    path: "/auth/signin",
    element: <Signin />,
    isPublic: true,
  },
  {
    path: "/auth/signup",
    element: (
      <SignupProvider>
        <Signup />
      </SignupProvider>
    ),
    isPublic: true,
  },
  {
    path: "/auth/signup-complete",
    element: <SignupComplete />,
    isPublic: true,
  },
  {
    path: "/",
    element: <Navigate to="/landing" />,
    isPublic: true,
  },
  {
    path: "/home",
    element: <Home />,
    isPublic: false,
  },
  {
    path: "/notifications",
    element: <Notifications />,
    isPublic: false,
  },
  {
    path: "/party-explore",
    element: <PartyExplore />,
    isPublic: false,
  },
  {
    path: "/party-filter",
    element: <PartyFiler />,
    isPublic: false,
  },
  {
    path: "/party-detail/:partyId",
    element: <PartyDetail />,
    isPublic: false,
  },
  {
    path: "/party-exit/:partyId",
    element: <PartyExit />,
    isPublic: false,
  },
  {
    path: "/party-create",
    element: (
      <PartyFormProvider>
        <CreateParty />
      </PartyFormProvider>
    ),
    isPublic: false,
  },
  {
    path: "/party-joined/:partyId",
    element: <PartyJoined />,
    isPublic: false,
  },
  {
    path: "/chat-list",
    element: <ChatList />,
    isPublic: false,
  },
  {
    path: "/chat-room/:chatId",
    element: <ChatRoom />,
    isPublic: false,
  },
  {
    path: "/profile",
    element: <ProfileMain />,
    isPublic: false,
  },
  {
    path: "/profile-edit",
    element: <ProfileEdit />,
    isPublic: false,
  },
  {
    path: "/profile-verification",
    element: <ProfileVerification />,
    isPublic: false,
  },
  {
    path: "/profile-watchlist",
    element: <ProfileWatchList />,
    isPublic: false,
  },
];

const freezedRoutes = Object.freeze(routes);

const PrivateRoute: React.FC<AuthRoute> = props => {
  const { isAuthenticated, link, children } = props;
  return isAuthenticated ? children : <Navigate to={link} />;
};

const PublicRoute: React.FC<AuthRoute> = props => {
  const { isAuthenticated, link, children } = props;
  return isAuthenticated ? <Navigate to={link} /> : <>{children}</>;
};

export { freezedRoutes as routes, PrivateRoute, PublicRoute };
