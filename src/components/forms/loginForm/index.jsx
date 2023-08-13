import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../input";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { kenzieHubApi } from "../../services/api";
import { InputPassword } from "../inputPassword";
import style from "./style.module.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginForm = ({ setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const userLogin = async (formData) => {
    try {
      setLoading(true);
      const { data } = await kenzieHubApi.post("/sessions", formData);
      setUser(data.user);
      localStorage.setItem("@Token:User", data.token);
      toast.success("Usuário logado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Insira corretamente os dados para prosseguir");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (formData) => {
    userLogin(formData);
  };

  const openRegister = () => {
    navigate("/register");
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
        <button className="btn register" onClick={openRegister}>
          Cadastre-se
        </button>
      </div>
    </form>
  );
};
