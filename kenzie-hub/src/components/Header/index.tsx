import { HeaderContainer } from "./styles";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/img/Group 189.png";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const Header = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="" />
        <button onClick={handleLogout}>Sair</button>
      </div>
    </HeaderContainer>
  );
};
