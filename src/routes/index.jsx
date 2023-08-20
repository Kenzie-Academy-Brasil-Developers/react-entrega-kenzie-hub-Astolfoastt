import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { DashBoardPage } from "../pages/dashboard";
import { ErrorPage } from "../pages/errorPage";
import { ProtectedRoutes, PublicRoutes } from "../protectedRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<DashBoardPage />} />
      </Route>
    </Routes>
  );
};
