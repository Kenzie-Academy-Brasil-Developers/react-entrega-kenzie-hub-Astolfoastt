import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { InputPassword } from "../inputPassword";
import { UserContext } from "../../../providers/userContext";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import "react-toastify/dist/ReactToastify.css";


export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (formData) => {
    userLogin(formData, setLoading);
  };

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="E-mail"
        type="email"
        placeholder="Digite seu e-mail aqui"
        {...register("email")}
        error={errors.email}
        disabled={loading}
      />
      <InputPassword
        label="Senha"
        type="password"
        placeholder="Digite sua senha aqui"
        {...register("password")}
        error={errors.password}
        disabled={loading}
      />
      <div className={style.containerButton}>
        <button className="btn" disabled={loading} type="submit">
          {" "}
          {loading ? "Entrando..." : "Entrar"}
        </button>
        <p>Ainda não possui uma conta?</p>
        <Link className="btn register" to="/register"> Cadastre-se </Link>
      </div>
    </form>
  );
};
