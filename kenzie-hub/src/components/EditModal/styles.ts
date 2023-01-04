import styled from "styled-components";

export const ContainerModalEdit = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;
  top: 0;
  background-color: #00000080;
  padding-top: 100px;

  div {
    background-color: var(--color-grey-2);
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-radius: 4px 4px 0px 0px;

    button {
      border: none;
      background-color: transparent;
      font-size: 18px;
      font-weight: 400;
      color: var(--color-grey-0);
    }
  }

  form {
    background-color: var(--color-grey-4);
    width: 90%;
    margin: 0 auto;
    padding: 0 20px;
    border-radius: 0px 0px 4px 4px;
    display: flex;
    flex-direction: column;

    .blockInput {
      cursor: not-allowed;
    }

    div {
      background-color: transparent;
      width: 100%;
      padding: 0;

      .btnEditar {
        padding: 5px;
        width: 60%;
        height: 48px;
        background: var(--color-primary);
        border: 1.2182px solid var(--color-primary);
        border-radius: 4.06066px;
        margin-bottom: 20px;
        font-size: 14px;
        font-weight: 600;
      }

      .btnExcluir {
        width: 30%;
        height: 48px;
        background-color: var(--color-grey-1);
        border: 1.2182px solid #868e96;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }

  @media (min-width: 700px) {
    div {
      width: 369px;
    }

    form {
      width: 369px;
    }
  }
`;
