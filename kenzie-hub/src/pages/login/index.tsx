import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import logo from "../../assets/img/Group 189.png";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { SectionLogin } from "./styles";
import { iDataLogin } from "../../contexts/typesUserContext";

const formLoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Deve se um email valido")
    .required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export const Login = () => {
  const { onSubmitLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataLogin>({
    resolver: yupResolver(formLoginSchema),
  });

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <SectionLogin>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <div>
          <h2 className="text-1">Login</h2>
        </div>
        <label className="text-4">Email</label>
        <input placeholder="Email" {...register("email")} />
        <span className="spanErrors">{errors.email?.message}</span>

        <label className="text-4">Senha</label>
        <input type="password" placeholder="Senha" {...register("password")} />
        <span className="spanErrors">{errors.password?.message}</span>

        <button type="submit" className="btnEntrar">
          Entrar
        </button>
        <div>
          <span className="text-5">Ainda não possui conta?</span>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            handleRegister();
          }}
          className="btnCadastrar"
        >
          Cadastrar-se
        </button>
      </form>
    </SectionLogin>
  );
};
