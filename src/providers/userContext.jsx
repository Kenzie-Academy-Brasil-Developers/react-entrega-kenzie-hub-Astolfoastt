import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { kenzieHubApi } from "../components/services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@Token:User");

      if (token) {
        try {
          setLoading(true);
          const { data } = await kenzieHubApi.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
          navigate("/dashboard");
        } catch (error) {
          toast.error("Sessão expirada, por favor faça o login novamente");
          localStorage.clear("@Token:user");
        } finally {
          setLoading(false);
        }
      }
    };
    loadUser();
  }, []);

  const userRegister = async (formData, setLoading) => {
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

  const userLogin = async (formData, setLoading) => {
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

  const logoutUser = () => {
    setUser(null);
    navigate("/");
    localStorage.clear("@Token:user");
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        user,
        setUser,
        logoutUser,
        userRegister,
        userLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
