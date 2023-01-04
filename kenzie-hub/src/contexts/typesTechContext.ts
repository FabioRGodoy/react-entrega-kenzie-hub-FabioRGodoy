import { iTechs } from "./typesUserContext";

export interface iTechproviderData {
  modalEdit: boolean;
  id: string;
  onSubmitModal: (data: iDataModal) => void;
  deleteTechs: (techsId: string) => void;
  setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  onClickInTech: (techId: string) => void;
  onSubmitModalEdit: (data: iTechs) => Promise<void>;
}

export interface iDataModal {
  title: string;
  status: string;
}

export interface iResponseAddTec {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
  user: {
    id: string;
  };
}

export interface iResponseEditTec {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}
