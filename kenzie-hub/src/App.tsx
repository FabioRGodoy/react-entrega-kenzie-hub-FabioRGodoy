import { ToastContainer } from "react-toastify";

import "./Styles/global.css";
import { AllRoutes } from "./Rotes/Rotes";

function App() {
  return (
    <>
      <AllRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
