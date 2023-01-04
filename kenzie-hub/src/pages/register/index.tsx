import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import logo from "../../assets/img/Group 189.png";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { SectionRegister } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { iDataRegister } from "../../contexts/typesUserContext";

const formSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .email("Precisa ser um email valido")
    .required("Email obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
    .matches(/[0-9]/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter ao menos um caracter especial"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Senha não corresponde"),
  bio: yup.string().required("Bio obrigatória"),
  contact: yup.string().required("Contato obrigatório"),
  course_module: yup.string().required("Módulo obrigatório"),
});

export const Register = () => {
  const { onSubmitRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataRegister>({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <SectionRegister>
      <div className="headerForm">
        <img src={logo} alt="logo" />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleBack();
          }}
        >
          Voltar
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmitRegister)}>
        <div>
          <h2 className="text-1">Crie sua conta</h2>
          <p className="text-5">Rapido e grátis, vamos nessa</p>
        </div>

        <label className="text-4">Nome</label>
        <input
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <span className="spanErrors">{errors.name?.message}</span>

        <label className="text-4">Email</label>
        <input
          type="text"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <span className="spanErrors">{errors.email?.message}</span>

        <label className="text-4">Senha</label>
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password", { minLength: 8 })}
        />
        <span className="spanErrors">{errors.password?.message}</span>

        <label className="text-4">Confirmar Senha</label>
        <input
          type="password"
          placeholder="Repita a senha"
          {...register("passwordConfirmation")}
        />
        <span className="spanErrors">
          {errors.passwordConfirmation?.message}
        </span>

        <label className="text-4">Bio</label>
        <input type="text" placeholder="Fale sobre você" {...register("bio")} />
        <span className="spanErrors">{errors.bio?.message}</span>

        <label className="text-4">Contato</label>
        <input
          type="text"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <span className="spanErrors">{errors.contact?.message}</span>

        <label className="text-4">Selecionar Módulo</label>
        <select {...register("course_module")}>
          <option value="">Selecione</option>

          <option value="Primeiro Módulo">Primeiro Módulo</option>

          <option value="Segundo Módulo">Segundo Módulo</option>

          <option value="Terceiro Módulo">Terceiro Módulo</option>

          <option value="Quarto Módulo">Quarto Módulo</option>

          <option value="Quinto Módulo">Quinto Módulo</option>

          <option value="Sexto Módulo">Sexto Módulo</option>
        </select>
        <span className="spanErrors">{errors.course_module?.message}</span>

        <button type="submit" className="btnCadastrar">
          Cadastrar
        </button>
      </form>
    </SectionRegister>
  );
};
