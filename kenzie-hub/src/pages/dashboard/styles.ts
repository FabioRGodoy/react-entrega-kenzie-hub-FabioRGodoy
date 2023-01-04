import styled from "styled-components";

export const DashContainer = styled.section`
  animation-duration: 1.6s;
  animation-name: dash;
  .containerInfos {
    border-bottom: 1px solid var(--color-grey-3);
    .infosUser {
      width: 90%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 18px;
      padding: 20px 0px;
    }
  }

  @media (min-width: 700px) {
    .containerInfos {
      .infosUser {
        height: 100px;
        width: 60%;
        margin: 0 auto;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }

    .alertContainer {
      width: 60%;
    }
  }

  @keyframes dash {
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
`;
