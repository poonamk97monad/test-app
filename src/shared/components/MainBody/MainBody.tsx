import React from "react";
import { BodyContent } from "./MainBody.styles";

interface MainBodyProps {}

export const MainBody: React.FC<MainBodyProps> = ({ children }) => {
  return <BodyContent>{children}</BodyContent>;
};

export default MainBody;
