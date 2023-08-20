import { LoginForm } from "../../components/forms/loginForm";
import style from "./style.module.scss";

export const LoginPage = ({}) => {
  return (
    <main className="container">
      <div className={style.containerFlex}>
        <h1>Login</h1>
        <LoginForm />
      </div>
    </main>
  );
};
