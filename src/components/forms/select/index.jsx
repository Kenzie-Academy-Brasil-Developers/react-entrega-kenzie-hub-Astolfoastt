import React, { forwardRef } from "react";
import style from "./style.module.scss";

export const SelectModule = forwardRef(
  ({ label, error, id, onChange, selectedModule }, ref) => {
    return (
      <div className={style.containerSelect}>
        <label>{label}</label>
        <select
          ref={ref}
          name={id}
          id={id}
          onChange={onChange}
          value={selectedModule}
        >
          <option></option>
          <option value="Primeiro módulo">Primeiro módulo</option>
          <option value="Segundo módulo">Segundo módulo</option>
          <option value="Terceiro módulo">Terceiro módulo</option>
          <option value="Quarto módulo">Quarto módulo</option>
        </select>
        {error ? (
          <p className={style.msg}>
            Por favor, selecione um módulo para prosseguir
          </p>
        ) : null}
      </div>
    );
  }
);
