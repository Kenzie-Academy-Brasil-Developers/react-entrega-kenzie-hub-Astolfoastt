import { createContext, useContext, useState } from "react";
import { UserContext } from "./userContext";
import { kenzieHubApi } from "../components/services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { techList, setTechList } = useContext(UserContext);
  const [ newTech, setNewTech] = useState([]);
  const [updateTech, setUpdateTech] = useState({});
  const [loading, setLoading] = useState(false);

const techCreate = async (formData) => {
  try {
    setLoading(true)
     const token = localStorage.getItem("@Token:User");

     const { data } = await kenzieHubApi.post ("/users/techs", formData, { 
        headers: {
           Authorization: `Bearer ${token}`,
        },
     });
     setNewTech([...newTech, data]); 
     toast.success("Tecnologia adicionada com sucesso!")
  } catch (error) {
     toast.error("Tecnologia já adicionada")
  }finally{
    setLoading(false)
  }
};

const techDelete = async (deletingId) => {
  try {
     const token = localStorage.getItem("@Token:User");

     await kenzieHubApi.delete(`/users/techs/${deletingId}`, {
        headers: {
           Authorization: `Bearer ${token}`,
        },
     });
     const newTechList = techList.filter((tech) => tech.id !== deletingId);
     setTechList(newTechList);
     toast.success("Exclusão realizada com sucesso!");
  } catch (error) {
     console.log(error);
  }
};

const editTech = async (formData) => {
  try {
    const token = localStorage.getItem("@Token:User");
    const { data } = await kenzieHubApi.put(
      `/users/techs/${updateTech.id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const newTechList = techList.map((tech) => {
      if (tech.id === updateTech.id) {
        return data;
      } else {
        return tech;
      }
    });
    setUpdateTech(newTechList);
    toast.success("Tecnologia atualizada com sucesso!");
  } catch (error) {
    toast.error("Por favor, insira uma tecnologia válida")
  }
};

  return (
    <TechContext.Provider value={{ techList, setTechList, techCreate, techDelete, loading, editTech, updateTech, setUpdateTech }}>
      {children}
    </TechContext.Provider>
  );
};



