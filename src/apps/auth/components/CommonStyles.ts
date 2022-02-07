import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CenteredStack = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftStack = styled(CenteredStack)`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
`;

export const StyledSubTitle = styled.div`
  margin-bottom: 20px;
`;

export const StyledCenterSubTitle = styled(StyledSubTitle)`
  text-align: center;
`;

export const PageTitle = styled.h1``;

// desired all font-families on form are Akkurat
//const fontFamily: string = "Akkurat LL";

export const SignInContent = styled.div`
  max-width: 100%;
  margin: auto;
  border-radius: 12px;

  .remember-me-label label{
    font-weight: 300 !important;
  }

  .remember-me-label label,
  .remember-me-label input{
    cursor: pointer;
  }
  .remember-me-label input:focus{
    box-shadow: none !important;
  }
`;
// & * {
//   font-family: ${fontFamily};
// }

export const SubtleLink = styled.a`
  color: ${(props) => props.theme.colors.action40};
  &:hover {
    color: ${(props) => props.theme.colors.action40};
  }
`;

export const StyledPrivacyNoticy = styled.div``;

export const FormLabel = styled(Form.Label)`
  display: inline-block;
  font-size: 1.125em;
  font-weight: 400;
  margin: 0 0 15px 0;
`;

export const FormControlAuth = styled(Form.Control)`
  width: 100%;
  display: block;
  line-height: 20px;
  padding: 12px 13px;
  border: #d6dadc 1px solid;
  font-size: 1em;
  color: #5a5a5b;
  font-weight: 300;
  outline-width: 0;
  outline: none;
  resize: none;
  border-radius: 3px;
  border-color: #9e9e9e;
  box-shadow: none !important;

  :focus{
    border-color: #8ac249;
  }
  :hover{
    border-color: #8ac249;
  }
`;

export const LoginButton = styled(Button)`
  background-color: #8ac249;
  line-height: 20px;
  display: block;
  float: left;
  position: relative;
  overflow: hidden;
  padding: 13px 46px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  margin: 0;
  border: 0;
  outline: 0;
  border-image-width: 0;
  border-radius: 3px;
  box-shadow: none !important;

  :hover,
  :focus{
    background-color: #8ac249;
  }
`;
