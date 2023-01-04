import { ContainerModalEdit } from "./styles";
import { TechContext } from "../../contexts/TechContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { iTechs } from "../../contexts/typesUserContext";

export const EditModal = () => {
  const { deleteTechs, setModalEdit, onSubmitModalEdit, id } =
    useContext(TechContext);

  const { register, handleSubmit } = useForm<iTechs>();

  // const { techs } = useContext(UserContext);
  // const nameTechInput = techs.find((item) => item.id === id);

  return (
    <ContainerModalEdit>
      <div>
        <h2 className="text-1">Detalhes da Tecnologia</h2>
        <button onClick={() => setModalEdit(false)}>X</button>
      </div>
      <form onSubmit={handleSubmit(onSubmitModalEdit)}>
        <label className="text-4">
          Nome da tecnologia
          <input
            className="blockInput"
            type="text"
            // placeholder={nameTechInput.title}
            disabled
          />
        </label>

        <label className="text-4">
          Selecionar novo status
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>

            <option value="Intermediário">Intermediário</option>

            <option value="Avançado">Avançado</option>
          </select>
        </label>
        <div>
          <button type="submit" className="btnEditar text-2">
            Salvar Alterações
          </button>
          <button
            className="btnExcluir text-2"
            onClick={(e) => {
              e.preventDefault();
              deleteTechs(id);
            }}
          >
            Excluir
          </button>
        </div>
      </form>
    </ContainerModalEdit>
  );
};
