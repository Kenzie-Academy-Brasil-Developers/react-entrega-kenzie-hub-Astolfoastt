import { useContext } from "react";
import { UserContext } from "../providers/userContext";
import { Navigate, Outlet } from "react-router-dom";
import { TechProvider } from "../providers/techContext";


export const ProtectedRoutes = () => {
  const { user} = useContext(UserContext);
  return user ? <TechProvider> <Outlet /> </TechProvider>: <Navigate to="/" />;
};

export const PublicRoutes = () => {
  const { user } = useContext(UserContext);

  return !user ? <Outlet />: <Navigate to="/dashboard" />;
};
