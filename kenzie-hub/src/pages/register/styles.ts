import styled from "styled-components";

export const SectionRegister = styled.section`
  padding-top: 50px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    .text-5 {
      margin-top: 18px;
    }
  }

  .headerForm {
    width: 295.83px;
    margin: 0 auto 20px auto;

    flex-direction: row;
    justify-content: space-between;

    img {
      width: 97.59px;
      height: 16.9px;
    }

    button {
      width: 79.54px;
      height: 31.95px;
      background: var(--color-grey-3);
      border-radius: 4px;
      color: var(--color-grey-0);
      border: none;
    }

    button:hover {
      filter: brightness(1.3);
    }
  }

  form {
    background-color: var(--color-grey-3);
    width: 296px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 33px 18px 20px 18px;
    border-radius: 3.20867px;
    margin-bottom: 30px;

    button {
      width: 100%;
      height: 38.38px;
      background-color: var(--color-primary-negative);
      color: var(--color-grey-0);
      border: 1.2182px solid var(--color-primary-negative);
      border-radius: 4px;
    }
  }

  @media (min-width: 700px) {
    .headerForm {
      width: 370px;
    }

    form {
      width: 370px;
    }

    .text-1 {
      font-size: 18px;
    }
  }
`;
