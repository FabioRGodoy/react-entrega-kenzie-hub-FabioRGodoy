import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Technologies } from "../../components/Technologies";
import { TechProvider } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";
import { DashContainer } from "./styles";

export const Dashboard = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return null;
  }

  return (
    <>
      {user ? (
        <>
          <Header />
          <DashContainer>
            <div className="containerInfos">
              <div className="infosUser">
                <h1 className="text-1">Olá, {user.name}</h1>
                <p className="text-5">{user.course_module}</p>
              </div>
            </div>
            <TechProvider>
              <Technologies />
            </TechProvider>
          </DashContainer>
        </>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};
