import { DefaultTemplate } from "./components/defaultTemplate";
import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "./providers/userContext";
import { LoadingIcon } from "./components/loadingPage";
import "./styles/index.scss";

const App = () => {
  const { loading } = useContext(UserContext);
  return (
    <>
      <DefaultTemplate>
        {loading ? <LoadingIcon /> : <RoutesMain />}
        <ToastContainer />
      </DefaultTemplate>
    </>
  );
};

export default App;
