import { forwardRef } from "react";

import style from "./style.module.scss";

export const InputPassword = forwardRef(({ error, label, ...rest }, ref) => {
  return (
    <div className={style.containerInput}>
      <label>{label}</label>
      <input ref={ref} {...rest} />
      {error ? <p className={style.msg}>{error.message}</p> : null}
    </div>
  );
});
