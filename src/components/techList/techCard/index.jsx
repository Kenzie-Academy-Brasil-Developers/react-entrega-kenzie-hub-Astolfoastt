import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";
import { useContext, useState } from "react";
import { TechContext } from "../../../providers/techContext";
import { ModalComponentEdit } from "../../editModal/editModal";
import style from "./style.module.scss";

export const TechCard = ({ tech }) => {

  const {techDelete, setUpdateTech} = useContext(TechContext);

  const [isModalOpen, setIsModalOpen] = useState(false); 
  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDelete = () => {
    techDelete(tech.id);
  };

  return (
    <>
      <li className={style.container}>
        <div className={style.containerFlex}>
          <div className={style.containerTechs}>
            <span className={style.title}>{tech.title}</span>
            <span className={style.status}>{tech.status}</span>
          </div>
          <div className={style.containerButtons}>
            <button onClick={() => {
              toggleModal()
              setUpdateTech(tech)
            }}>
              <MdOutlineEdit size={25} />
            </button>
            <button onClick={handleDelete}>
              <MdOutlineDelete size={25} />
            </button>
          </div>
        </div>
        <ModalComponentEdit  isOpen={isModalOpen} toggleModal={toggleModal}/>
      </li>
    </>
  );
};
