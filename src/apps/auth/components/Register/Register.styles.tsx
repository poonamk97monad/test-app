import styled from "styled-components";
import { Link } from "react-router-dom";
import { InputGroup, Form, FormControl, Button } from "react-bootstrap";

export const ErrorMessage = styled.div`
  justify-content: left;
  padding-bottom: 15px;
  padding-bottom: 15px;
  font-size: 14px;
`;

export const LoginLink = styled(Link)``;

export const AlreadyHaveAccount = styled.div`
  font-weight: 300 !important;
  a{
    text-decoration: none;
    color: #00bcd4 !important;
  }
`;

export const StyledInputGroupText = styled(InputGroup.Text)`
  cursor: pointer;
`;

export const PhoneInput = styled(FormControl)`
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

export const GenerateOtpButton = styled(Button)`
  display: inline-block;
  line-height: 20px;
  padding: 12px 13px;
  border: #d6dadc 1px solid;
  font-size: 1em;
  color: #fff !important;
  font-weight: 300;
  outline-width: 0;
  outline: none;
  resize: none;
  border-radius: 3px;
  border-color: #8ac249;
  box-shadow: none !important;
  background-color: #8ac249;

  :focus,
  :hover{
    background-color: #8ac249;
    border-color: #8ac249;
  }
`;