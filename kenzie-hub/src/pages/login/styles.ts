import styled from "styled-components";

export const SectionLogin = styled.section`
  div {
    
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 101px;
    height: 14px;
    margin: 60px 0 20px 0;
  }

  form {
    background-color: var(--color-grey-3);
    width: 296px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 33px 18px;
    border-radius: 3.20867px;

    .btnEntrar {
      width: 100%;
      height: 38.5px;
      background-color: var(--color-primary);
      border: 1.2182px solid var(--color-primary);
      border-radius: 4.06066px;
      color: var(--color-grey-0);
      margin-top: 20px;
    }

    .btnEntrar:hover {
      background-color: var(--color-primary-focus);
    }

    .text-5 {
      margin: 27px 0 17px 0;
    }

    .btnCadastrar {
      width: 100%;
      height: 38.5px;
      background-color: var(--color-grey-1);
      border: 1.2182px solid var(--color-grey-1);
      border-radius: 4.06066px;
      color: var(--color-grey-0);
    }

    .btnCadastrar:hover {
      background-color: var(--color-grey-2);
    }
  }
  @media (min-width: 700px) {
    img {
      width: 144.06px;
      height: 19.97px;
    }

    form {
      width: 369px;

      input {
        height: 38px;
      }

      .btnEntrar {
        height: 48px;
      }

      .btnCadastrar {
        height: 48px;
      }
    }
  }
`;
