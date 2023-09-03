import { useContext, useState } from "react";
import { TechCard } from "./techCard";
import { TechContext } from "../../providers/techContext";
import { MdAdd } from "react-icons/md";
import {ModalComponent } from "../addModal/addModal";
import style from "./style.module.scss";


export const TechList = () => {
  const { techList } = useContext(TechContext);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <main className={style.containerFlex}>
      <div className={style.containerTech}>
        <h1>Tecnologias</h1>
        <button className={style.buttonAdd} onClick={toggleModal}><MdAdd size={40}/></button>
      </div>
      <div>
        {techList.length === 0 ? (
          <p> Você ainda não possui nenhuma tecnologia adicionada</p>
        ) : (
          <ul>
            {techList.map((tech) => (
              <TechCard key={tech.id} tech={tech} />
            ))}
          </ul>
        )}
      </div>
      <ModalComponent isOpen={isModalOpen} toggleModal={toggleModal} />
    </main>
  );
};
