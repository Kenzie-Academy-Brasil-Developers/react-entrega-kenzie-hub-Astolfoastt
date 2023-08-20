import Loading from "../../assets/LoadingIcon.svg";
import style from "./style.module.scss";

export const LoadingIcon = () => {
  return (
    <div className={style.containerLoading}>
      <img src={Loading} alt="Carregando..." />
    </div>
  );
};
