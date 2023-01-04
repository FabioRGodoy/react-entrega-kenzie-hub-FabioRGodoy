import { Dispatch, ReactNode, SetStateAction } from "react";

export interface UserProviderData {
  user: iUser | null;
  techs: iTechs[];
  loading: boolean;
  modal: boolean;
  onSubmitLogin: (data: iDataLogin) => void;
  onSubmitRegister: (data: iDataRegister) => void;
  setUser: Dispatch<SetStateAction<iUser | null>>;
  setModal: Dispatch<SetStateAction<boolean>>;
  setTechs: Dispatch<SetStateAction<iTechs[]>>;
}

export interface iUserProps {
  children: ReactNode;
}

export interface iTechs {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface iDataLogin {
  email: string;
  password: string;
}

export interface iDataRegister {
  email: string;
  password: string;
  passwordConfirmation: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface iUser {
  id?: string;
  name?: string;
  email?: string;
  course_module?: string;
  bio?: string;
  contact?: string;
  techs?: iTechs[];
  works?: [];
  created_at?: string;
  updated_at?: string;
  avatar_url?: string | null;
}

export interface iResponseLogin {
  token: string;
  user: {
    avatar_url: string | null;
    bio: string;
    contact: string;
    course_module: string;
    created_at: string;
    email: string;
    id: string;
    name: string;
  };
  techs: iTechs[];
  updated_at: string;
  works: [];
}

export interface iResponseRegister {
  avatar_url: null;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  updated_at: string;
}
