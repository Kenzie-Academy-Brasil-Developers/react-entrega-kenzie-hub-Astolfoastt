import { useState } from "react";
import { DefaultTemplate } from "./components/defaultTemplate";
import { RoutesMain } from "./routes";
import "./styles/index.scss";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const logoutUser = () => {
    setUser(null);
    navigate("/");
    localStorage.clear("@Token:user");
  };
  return (
    <>
      <DefaultTemplate logoutUser={logoutUser}>
        <RoutesMain user={user} setUser={setUser} />
        <ToastContainer />
      </DefaultTemplate>
    </>
  );
};

export default App;
