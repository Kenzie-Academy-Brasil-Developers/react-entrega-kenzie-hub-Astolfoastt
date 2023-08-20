import { useContext } from "react";
import { UserContext } from "../../providers/userContext";
import style from "./style.module.scss";

export const DashBoardPage = () => {
  const { user } = useContext(UserContext);

  return (
    <main className="containerDashboard">
      <div className={style.containerFlex}>
        <div className={style.textUser}>
          <p>Olá, {user?.name}</p>
          <span>{user?.course_module}</span>
        </div>
        <div className={style.textInfo}>
          <p>Que pena! Estamos em desenvolvimento :(</p>
          <span>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </span>
        </div>
      </div>
    </main>
  );
};
