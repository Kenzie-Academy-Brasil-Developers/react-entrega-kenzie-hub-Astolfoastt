import { RegisterForm } from "../../components/forms/registerForm";
import style from "./style.module.scss";

export const RegisterPage = () => {
  return (
    <main className="container">
      <div className={style.containerFlex}>
        <div className={style.text}>
          <h1>Crie sua conta</h1>
          <span>Rápido e grátis, vamos nessa</span>
        </div>
        <RegisterForm />
      </div>
    </main>
  );
};
