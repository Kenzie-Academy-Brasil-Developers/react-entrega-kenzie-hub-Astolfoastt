import React, { useContext } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/techContext";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./style.module.scss";

Modal.setAppElement("#root");

export const ModalComponentEdit = ({ isOpen, toggleModal}) => {
  const { editTech, updateTech, loading } = useContext(TechContext);
  const { register, handleSubmit, watch, reset } = useForm({
    values: {
      title: updateTech.title,
      status: updateTech.status,
    },
  });

  const watchStatus = watch("status");

  const onSubmit = (formData) => {
    editTech(formData);
    reset();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      overlayClassName={styles["modal-overlay"]}
      className={styles["modal-content"]}
      contentLabel="Modal Tech"
    >
      <div>
        <div className={styles.title}>
          <h2>Cadastrar Tecnologia</h2>
          <button onClick={toggleModal}>X</button>
        </div>
        <div className={styles.form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nome</label>
            <input {...register("title")} disabled={loading} />

            <label>Selecionar Status</label>
            <select
              {...register("status")}
              value={watchStatus}
              disabled={loading}
            >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>

            <button className="btn" type="submit">
              Cadastrar Tecnologia
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};
