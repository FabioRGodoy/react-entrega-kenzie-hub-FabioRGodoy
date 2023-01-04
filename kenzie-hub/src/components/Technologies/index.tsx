import { TecnologiesContainer } from "./styles";
import { FiDelete, FiEdit2 } from "react-icons/fi";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { AddModal } from "../AddModal";
import { TechContext } from "../../contexts/TechContext";
import { EditModal } from "../EditModal";

export const Technologies = () => {
  const { techs, modal, setModal } = useContext(UserContext);
  const { deleteTechs, modalEdit, onClickInTech } = useContext(TechContext);

  return (
    <>
      <TecnologiesContainer>
        <div>
          <h2 className="text-1">Tecnologias</h2>
          <button onClick={() => setModal(true)}>+</button>
        </div>
        <ul>
          {techs.map((item) => {
            return (
              <li key={item.id}>
                <h3 className="text-1">{item.title}</h3>
                <div>
                  <span className="text-6">{item.status}</span>
                  <div className="containerBtns">
                    <button onClick={() => deleteTechs(item.id)}>
                      <FiDelete color="grey" fontSize={15} />
                    </button>
                    <button onClick={() => onClickInTech(item.id)}>
                      <FiEdit2 color="grey" fontSize={15} />
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </TecnologiesContainer>
      {modalEdit && <EditModal />}
      {modal && <AddModal />}
    </>
  );
};
