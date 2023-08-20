import { HeaderPage } from "../header/index.jsx";

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <HeaderPage />
      {children}
    </>
  );
};
