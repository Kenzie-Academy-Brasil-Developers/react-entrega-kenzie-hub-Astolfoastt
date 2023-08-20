import React, { forwardRef } from "react";
import style from "./style.module.scss";
export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div className={style.containerInput}>
      <label>{label}</label>
      <input ref={ref} {...rest} />
      {error ? <p className={style.msg}>{error.message}</p> : null}
    </div>
  );
});
