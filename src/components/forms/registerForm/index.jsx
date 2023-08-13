import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../input";
import { InputPassword } from "../inputPassword";
import { SelectModule } from "../select/index.jsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { kenzieHubApi } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const [selectedModule, setSelectedModule] = useState({
    value: "Primeiro módulo",
  });
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const navigate = useNavigate();

  const userRegister = async (formData) => {
    try {
      setLoading(true);
      await kenzieHubApi.post("/users", formData);
      toast.success("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Usuário já cadastrado");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (formData) => {
    userRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Nome"
        type="text"
        placeholder="Digite aqui seu nome"
        {...register("name")}
        error={errors.name}
        disabled={loading}
      />
      <Input
        label="E-mail"
        type="email"
        placeholder="Digite aqui seu e-mail"
        {...register("email")}
        error={errors.email}
        disabled={loading}
      />
      <InputPassword
        type="password"
        label="Senha"
        placeholder="Digite aqui sua senha"
        {...register("password")}
        error={errors.password}
        disabled={loading}
      />
      <InputPassword
        type="password"
        label="Confirmar Senha"
        placeholder="Digite novamente sua senha"
        {...register("confirmPassword")}
        error={errors.confirmPassword}
        disabled={loading}
      />
      <Input
        label="Bio"
        type="text"
        placeholder="Fale sobre você"
        {...register("bio")}
        error={errors.bio}
        disabled={loading}
      />
      <Input
        label="Contato"
        type="text"
        placeholder="opção de contato"
        {...register("contact")}
        error={errors.contact}
        disabled={loading}
      />
      <SelectModule
        label="Selecionar Módulo"
        value={selectedModule.value}
        onChange={(e) => {
          const value = e.target.value;
          setSelectedModule({ value });
          register("course_module", { value, required: true });
        }}
        error={errors.course_module}
        disabled={loading}
      />

      <div>
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "cadastrar"}
        </button>
      </div>
    </form>
  );
};
