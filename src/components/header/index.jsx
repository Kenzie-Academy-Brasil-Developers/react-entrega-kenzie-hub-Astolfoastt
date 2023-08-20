import React, { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import style from "./style.module.scss";
import { UserContext } from "../../providers/userContext";

export const HeaderPage = () => {
  const location = useLocation();
  const { logoutUser } = useContext(UserContext);

  return (
    <header className="container dashboard">
      <div
        className={`${style.containerFlex} ${
          (location.pathname === "/" || location.pathname === "/register") &&
          style.centered
        }`}
      >
        <img src={Logo} alt="Logo Kenzie Hub" />
        {location.pathname === "/register" && (
          <Link className="btn close" to="/">
            Voltar
          </Link>
        )}
        {location.pathname === "/dashboard" && (
          <button className="btn close" onClick={logoutUser}>
            Sair
          </button>
        )}
      </div>
    </header>
  );
};
