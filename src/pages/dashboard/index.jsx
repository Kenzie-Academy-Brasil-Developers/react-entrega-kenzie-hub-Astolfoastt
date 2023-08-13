import style from "./style.module.scss";

export const DashBoardPage = ({ user }) => {
  return (
    <main className="container dashboard">
      <div className={style.textUser}>
        <p>Olá, {user?.name}</p>
        <span>{user?.course_module}</span>
      </div>
      <div className={style.textInfo}>
        <p>Que pena! Estamos em desenvolvimento</p>
        <span>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </span>
      </div>
    </main>
  );
};
