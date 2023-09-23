import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { PrivateRoute, PublicRoute, routes } from "./routes";

import { fetchUserInfo } from "@/api/jjan/userController";

const RouterClient = () => {
  // todo change to useAuth
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

  return (
    <Routes>
      {routes.map(({ isPublic, path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            isPublic ? (
              <PublicRoute isAuthenticated={isLoggedIn} link="/">
                {element}
              </PublicRoute>
            ) : (
              <PrivateRoute isAuthenticated={isLoggedIn} link="/landing">
                {element}
              </PrivateRoute>
            )
          }
        />
      ))}
    </Routes>
  );
};

export { RouterClient as Router };
