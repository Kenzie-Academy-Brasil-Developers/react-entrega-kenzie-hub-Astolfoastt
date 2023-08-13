import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { DashBoardPage } from "../pages/dashboard";
import { ErrorPage } from "../pages/errorPage";

export const RoutesMain = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashBoardPage user={user} />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
