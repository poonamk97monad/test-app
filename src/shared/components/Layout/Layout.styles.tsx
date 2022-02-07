import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  #root {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    /* min-height: fill-available; */
    display: flex;
    flex-direction: column;
    > *:first-child {
      flex: 1;
    }
    @media screen and (min-width: 480px) {
      min-height: 100vh;
    }
  }

  body.overlay-open {
    overflow: hidden;
    padding-right: 15px;
  }

  *,::after,::before { 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const StyledContainer = styled.div`
  margin-top: 130px;
  min-height: 700px;
  background: #f5f8f9;
`;
