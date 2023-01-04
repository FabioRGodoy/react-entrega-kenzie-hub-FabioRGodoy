import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import {
  iDataModal,
  iResponseAddTec,
  iResponseEditTec,
  iTechproviderData,
} from "./typesTechContext";
import { iTechs, iUserProps } from "./typesUserContext";
import { UserContext } from "./UserContext";
import {} from "./UserContext";

export const TechContext = createContext<iTechproviderData>(
  {} as iTechproviderData
);

export const TechProvider = ({ children }: iUserProps) => {
  const { techs, setTechs, setModal } = useContext(UserContext);
  const [modalEdit, setModalEdit] = useState(false);
  const [id, setId] = useState("");

  const onClickInTech = (techId: string) => {
    setId(techId);
    setModalEdit(true);
  };

  const onSubmitModal = async (dataModal: iDataModal) => {
    try {
      const { data } = await api.post<iResponseAddTec>(
        "/users/techs",
        dataModal
      );

      setTechs([...techs, data]);
      toast.success("Tecnologia criada com sucesso!");
    } catch (error) {
      console.error(error);
    }
    setModal(false);
  };

  const onSubmitModalEdit = async (dataEditModal: iTechs): Promise<void> => {
    try {
      const { data } = await api.put<iResponseEditTec>(
        `/users/techs/${id}`,
        dataEditModal
      );
      toast.success("Tecnologia editada com sucesso!");

      setModalEdit(false);
    } catch (error) {
      toast.error("Erro");
      console.error(error);
    }
  };

  const deleteTechs = async (techsId: string) => {
    const newArrayTechs = techs.filter((item) => item.id !== techsId);

    toast.success("Tecnologia deletada com sucesso!");

    try {
      const resp = await api.delete(`/users/techs/${techsId}`);

      setTechs(newArrayTechs);
      setModalEdit(false);
      return resp;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        onSubmitModal,
        deleteTechs,
        modalEdit,
        setModalEdit,
        onClickInTech,
        onSubmitModalEdit,
        id,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
