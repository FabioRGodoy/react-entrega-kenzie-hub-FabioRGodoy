import styled from "styled-components";

export const TecnologiesContainer = styled.section`
  width: 90%;
  margin: 18px auto;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation-duration: 2s;
    animation-name: div;

    button {
      width: 30px;
      height: 30px;
      background: var(--color-grey-3);
      border-radius: 4px;
      border: none;
      color: var(--color-grey-0);
      font-size: 20px;
      font-weight: 500;
    }
  }

  ul {
    width: 100%;
    margin: 30px auto;
    background-color: var(--color-grey-3);
    padding: 5px;
    border-radius: 4px;
    animation-duration: 2s;
    animation-name: ul;

    li {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--color-grey-4);
      border-radius: 4.06066px;
      margin: 10px 5px;
      animation-duration: 1.6s;
      animation-name: techs;

      h3 {
        width: 50%;
      }

      div {
        width: 50%;

        button {
          background-color: transparent;
          border: none;
        }

        .containerBtns {
          width: max-content;
          display: block;
        }
      }
    }

    @keyframes div {
      from {
        opacity: 2%;
      }

      to {
        opacity: 100%;
      }
    }

    @keyframes techs {
      from {
        margin-left: 100%;
        width: 100%;
        opacity: 2%;
      }

      to {
        margin-left: 0%;
        width: 100%;
      }
    }

    @keyframes ul {
      from {
        width: 20%;

        transform: rotateX(180deg);
      }

      to {
        width: 100%;
      }
    }
  }

  @media (min-width: 700px) {
    width: 60%;
  }
`;
