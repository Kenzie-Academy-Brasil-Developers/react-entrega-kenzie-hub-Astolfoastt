import { HeaderPage } from "../header/index.jsx";


export const DefaultTemplate = ({ children, logoutUser }) => {
  return (
    <>
       <HeaderPage logoutUser={logoutUser}/> 
      {children}
    </>
  );
};
