import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ContainerModal } from "./style";
import { TechContext } from "../../contexts/TechContext";
import { iDataModal } from "../../contexts/typesTechContext";

export const AddModal = () => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatorio"),
    status: yup.string().required("Status obrigatorio"),
  });

  const { setModal } = useContext(UserContext);
  const { onSubmitModal } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataModal>({
    resolver: yupResolver(formSchema),
  });

  return (
    <ContainerModal>
      <div>
        <h2 className="text-1">Cadastrar Tecnologia</h2>
        <button onClick={() => setModal(false)}>X</button>
      </div>
      <form onSubmit={handleSubmit(onSubmitModal)}>
        <label className="text-4">
          Nome
          <input type="text" placeholder="Ex: React" {...register("title")} />
          <span className="spanErrors">{errors.title?.message}</span>
        </label>

        <label className="text-4">
          Selecionar status
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>

            <option value="Intermediário">Intermediário</option>

            <option value="Avançado">Avançado</option>
          </select>
          <span className="spanErrors">{errors.status?.message}</span>
        </label>
        <button type="submit" className="text-2">
          Cadastrar Tecnologia
        </button>
      </form>
    </ContainerModal>
  );
};
