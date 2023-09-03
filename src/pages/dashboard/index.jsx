import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/userContext";
import { TechList } from "../../components/techList";
import style from "./style.module.scss";



export const DashBoardPage = () => {
  const { user, techList, getTechList } = useContext(UserContext);

  useEffect(() => {
    getTechList();
  }, [techList]);

  return (
    <main className="containerDashboard">
      <div className={style.containerFlex}>
        <div className={style.textUser}>
          <p>Olá, {user?.name}</p>
          <span>{user?.course_module}</span>
        </div>
        <TechList />
      </div>
    </main>
  );
};
