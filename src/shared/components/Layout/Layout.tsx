import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle, StyledContainer } from "./Layout.styles";
import { Seo, SeoProps, Header, Footer, MainBody } from "@shared/components";

interface LayutProps extends SeoProps {}
export const Layout: React.FC<LayutProps> = ({ title, children }) => {
  return (
    <>
      {/* <Seo title={title} /> */}
      <GlobalStyle />
      <Header />
      <MainBody>
        <StyledContainer>{children}</StyledContainer>
      </MainBody>
      <Footer />
    </>
  );
};

export default Layout;
