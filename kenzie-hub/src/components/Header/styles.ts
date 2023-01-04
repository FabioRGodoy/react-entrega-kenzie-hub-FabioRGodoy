import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 70px;
  border-bottom: 1px solid var(--color-grey-3);
  display: flex;
  justify-content: center;

  div {
    width: 90%;
    height: 70px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 105.53px;
      height: 14.63px;
    }

    button {
      width: 55.49px;
      height: 32px;
      background: var(--color-grey-3);
      border-radius: 4px;
      color: var(--color-grey-0);
      border: none;
    }

    button:hover {
      filter: brightness(1.3);
    }
  }

  @media (min-width: 700px) {
    div {
      width: 60%;
    }
  }
`;
