import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import style from "./style.module.scss";

export const HeaderPage = ({ logoutUser }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const openLogin = () => {
    navigate("/");
  };

  return (
    <header className="container header">
      <div
        className={`${style.containerFlex} ${
          location.pathname === "/" ? style.centered : ""
        }`}
      >
        <img src={Logo} alt="Logo Kenzie Hub" />
        {location.pathname === "/register" && (
          <button className="btn close" onClick={openLogin}>
            Voltar
          </button>
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
